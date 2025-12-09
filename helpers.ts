import { Category, Source } from "./types";

export const getCategory = (symbol: string, source: Source): Category => {
  if (symbol === "GOLD") return "Commodities";
  return source === "CMC" ? "Crypto" : "Stocks";
};

export const formatUSD = (value: number): string => {
  const decimals = value < 1_000 ? 2 : 0;
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

export const formatPrice = (value: number): string =>
  value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
