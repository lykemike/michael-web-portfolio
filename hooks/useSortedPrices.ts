import { useMemo } from "react";
import { PriceRow } from "@/types";
import { SYMBOL_NAMES, SYMBOL_ORDER } from "@/constants";

export const useSortedPrices = (data: any[] | undefined) => {
  return useMemo<PriceRow[]>(() => {
    if (!data?.length) return [];

    const mappedData = data.map((item) => ({
      ...item,
      name: SYMBOL_NAMES[item.symbol] || item.symbol,
    })) as PriceRow[];

    return mappedData.sort((a, b) => {
      const indexA = SYMBOL_ORDER.indexOf(a.symbol as any);
      const indexB = SYMBOL_ORDER.indexOf(b.symbol as any);
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });
  }, [data]);
};
