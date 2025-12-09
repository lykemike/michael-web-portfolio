// app/api/prices/route.ts
import { Elysia, t } from "elysia";

export const runtime = "nodejs";

/** Outbound row for your UI */
type PriceRow = {
  name: string; // full name: Bitcoin, Ethereum, S&P 500, etc.
  symbol: string; // ticker: BTC, ETH, SNP500, etc.
  priceUsd: number;
  priceIdr?: number;
  change24hPct: number;
  marketCapUsd?: number;
  volume24hUsd?: number;
  source: "CMC" | "FINNHUB";
};

const DEFAULT_CRYPTO = ["BTC", "ETH", "SOL", "HYPE"] as const;
const DEFAULT_MARKETS = ["SNP500", "NASDAQ", "DOW", "GOLD"] as const;

/** Finnhub /quote schema (partial) */
type FinnhubQuote = {
  c?: number;
  d?: number;
  dp?: number;
  h?: number;
  l?: number;
  o?: number;
  pc?: number;
  t?: number;
  v?: number; // volume
};

/** Minimal CMC response typing for v2 quotes/latest */
type CmcQuoteUSD = {
  price: number;
  percent_change_24h?: number;
  market_cap?: number;
  volume_24h?: number;
};

type CmcAsset = {
  name?: string; // full name from CMC
  symbol?: string;
  quote?: {
    USD?: CmcQuoteUSD;
  };
};

type CmcResponse = {
  status?: {
    error_code?: number;
    error_message?: string;
  };
  data?: Record<string, CmcAsset | CmcAsset[]>;
};

/** Meta bag included in the JSON response */
type Meta = {
  crypto: string[];
  markets: string[];
  errors: Record<string, string>;
  usedProxy?: Record<string, { used: string; multiplier: number }>;
  cmcMissing?: string;
};

/** Finnhub index symbols (with caret). Choose NASDAQ variant as you prefer. */
const FINN_INDEX_MAP: Record<string, string> = {
  SNP500: "^GSPC",
  NASDAQ: "^NDX",
  DOW: "^DJI",
  GOLD: "GLD",
};

/** Full names for market indices */
const MARKET_NAMES: Record<string, string> = {
  SNP500: "S&P 500",
  NASDAQ: "NASDAQ 100",
  DOW: "Dow Jones Industrial Average",
  GOLD: "Gold",
};

/** If index quote fails, try these ETF proxies. */
const PROXY_ETF: Record<string, string> = {
  SNP500: "SPY",
  NASDAQ: "QQQ",
  DOW: "DIA",
};

/** Scale ETF to approximate the index level. */
const PROXY_MULTIPLIER: Record<string, number> = {
  SNP500: 10,
  NASDAQ: 40,
  DOW: 100,
};

function toMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return "Unknown error";
  }
}

async function fetchFinnhubQuote(
  symbol: string,
  token: string
): Promise<{ ok: boolean; json: Partial<FinnhubQuote> }> {
  const r = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(
      symbol
    )}&token=${token}`,
    { cache: "no-store" }
  );
  const j: Partial<FinnhubQuote> = await r
    .json()
    .catch(() => ({} as Partial<FinnhubQuote>));
  return { ok: r.ok, json: j };
}

const app = new Elysia({ prefix: "/api/prices" }).get(
  "/",
  async ({ query, set }) => {
    const crypto = (query.crypto ?? DEFAULT_CRYPTO.join(","))
      .split(",")
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);
    const markets = (query.markets ?? DEFAULT_MARKETS.join(","))
      .split(",")
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);

    const meta: Meta = { crypto, markets, errors: {} };
    const out: PriceRow[] = [];

    // ----- CoinMarketCap (USD only) -----
    if (crypto.length) {
      try {
        const cmcKey = process.env.CMC_API_KEY ?? "";
        if (!cmcKey) throw new Error("CMC_API_KEY missing");

        const cmcRes = await fetch(
          `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${encodeURIComponent(
            crypto.join(",")
          )}&convert=USD`,
          { headers: { "X-CMC_PRO_API_KEY": cmcKey }, cache: "no-store" }
        );

        const cmcJson: CmcResponse = await cmcRes.json().catch(() => ({}));
        const errCode = cmcJson?.status?.error_code ?? 0;
        if (!cmcRes.ok || errCode !== 0) {
          throw new Error(
            `CMC error: HTTP ${cmcRes.status} code ${errCode} msg ${
              cmcJson?.status?.error_message ?? "unknown"
            }`
          );
        }

        const data = cmcJson.data ?? {};
        for (const sym of Object.keys(data)) {
          const arrOrObj = data[sym];
          const d: CmcAsset = Array.isArray(arrOrObj) ? arrOrObj[0] : arrOrObj;
          const qUSD = d?.quote?.USD;
          if (!qUSD) continue;

          out.push({
            name: d.name ?? sym, // Use full name from CMC or fallback to symbol
            symbol: sym,
            priceUsd: Number(qUSD.price),
            change24hPct: Number(qUSD.percent_change_24h ?? 0),
            marketCapUsd: qUSD.market_cap ? Number(qUSD.market_cap) : undefined,
            volume24hUsd: qUSD.volume_24h ? Number(qUSD.volume_24h) : undefined,
            source: "CMC",
          });
        }

        const missing = crypto.filter(
          (s) => !Object.prototype.hasOwnProperty.call(data, s)
        );
        if (missing.length) {
          meta.cmcMissing = `No CMC data for: ${missing.join(", ")}`;
        }
      } catch (e: unknown) {
        meta.errors.cmc = toMessage(e);
      }
    }

    // ----- Finnhub (indices + scaled proxy fallback) -----
    if (markets.length) {
      try {
        const token = process.env.FINNHUB_API_KEY ?? "";
        if (!token) throw new Error("FINNHUB_API_KEY missing");

        for (const friendly of markets) {
          const indexSym = FINN_INDEX_MAP[friendly] ?? friendly;
          let used = indexSym;

          let { ok, json } = await fetchFinnhubQuote(indexSym, token);
          const invalid =
            !ok || ((!json?.c || json.c === 0) && (!json?.pc || json.pc === 0));

          if (invalid && PROXY_ETF[friendly]) {
            const proxy = PROXY_ETF[friendly];
            const p = await fetchFinnhubQuote(proxy, token);
            if (p.ok && (p.json?.c || p.json?.pc)) {
              used = proxy;
              ok = p.ok;
              json = p.json;
            }
          }

          if (!ok) {
            meta.errors[friendly] = `Finnhub quote failed for ${indexSym}`;
            continue;
          }

          let price = Number(json.c ?? 0);
          let prev = Number(json.pc ?? 0);
          let volume = json.v ? Number(json.v) : undefined;

          if (used !== indexSym && PROXY_MULTIPLIER[friendly]) {
            const m = PROXY_MULTIPLIER[friendly];
            price *= m;
            prev *= m;
            meta.usedProxy ??= {};
            meta.usedProxy[friendly] = { used, multiplier: m };
          }

          const pct = prev ? ((price - prev) / prev) * 100 : 0;

          out.push({
            name: MARKET_NAMES[friendly] ?? friendly, // Use full name from map
            symbol: friendly,
            priceUsd: price,
            change24hPct: pct,
            volume24hUsd: volume,
            source: "FINNHUB",
          });
        }
      } catch (e: unknown) {
        meta.errors.finnhub = toMessage(e);
      }
    }

    // Set no-cache header
    set.headers["Cache-Control"] = "no-store";

    return { data: out, meta };
  },
  {
    query: t.Object({
      crypto: t.Optional(t.String()),
      markets: t.Optional(t.String()),
    }),
  }
);

export const GET = app.handle;
