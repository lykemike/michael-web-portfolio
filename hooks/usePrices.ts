// hooks/usePrices.ts
"use client";

import { useQuery } from "@tanstack/react-query";

export type PriceRow = {
  symbol: string;
  priceUsd: number;
  priceIdr?: number;
  change24hPct: number;
  marketCapUsd?: number;
  volume24hUsd?: number;
  source: "CMC" | "FINNHUB";
  [key: string]: string | number | undefined;
};

export function usePrices(
  crypto: string[] = ["BTC", "ETH", "SOL", "HYPE"],
  markets: string[] = ["SNP500", "NASDAQ", "BBCA", "BBRI", "GOLD"],
  refetchMs = 5000 // tune: 5–15s for CMC quota
) {
  const params = new URLSearchParams();
  if (crypto.length) params.set("crypto", crypto.join(","));
  if (markets.length) params.set("markets", markets.join(","));

  return useQuery({
    queryKey: ["prices", crypto.sort().join(","), markets.sort().join(",")],
    queryFn: async () => {
      const res = await fetch(`/api/prices?${params.toString()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load prices");
      const json = await res.json();
      return json.data as PriceRow[];
    },
    staleTime: 2000,
    refetchOnWindowFocus: false,
    refetchInterval: refetchMs,
    placeholderData: (prev) => prev, // avoids UI flicker when polling
  });
}
