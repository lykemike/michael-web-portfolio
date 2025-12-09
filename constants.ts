export const CRYPTO = ["BTC", "ETH", "SOL", "HYPE"] as const;
export const MARKETS = ["SNP500", "NASDAQ", "DOW", "GOLD"] as const;
export const REFRESH_MS = 150_000;
export const SYMBOL_ORDER = [...CRYPTO, ...MARKETS];

export const SYMBOL_IMAGES: Record<string, string> = {
  BTC: "/lifestyle/bitcoin.avif",
  ETH: "/lifestyle/ethereum.avif",
  SOL: "/lifestyle/solana.avif",
  HYPE: "/lifestyle/hyperliquid.avif",
  SNP500: "/lifestyle/snp500.png",
  NASDAQ: "/lifestyle/nasdaq.jpg",
  DOW: "/lifestyle/dow.svg",
  GOLD: "/lifestyle/xau.png",
};

export const SYMBOL_NAMES: Record<string, string> = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  SOL: "Solana",
  HYPE: "Hyperliquid",
  SNP500: "S&P 500",
  NASDAQ: "NASDAQ",
  DOW: "Dow Jones",
  GOLD: "Gold",
};
