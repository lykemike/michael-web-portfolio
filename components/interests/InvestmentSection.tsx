"use client";

import { useRef } from "react";
import { CardContent } from "@/components/ui/card";
import { usePrices } from "@/hooks/usePrices";

import { CRYPTO, MARKETS, REFRESH_MS } from "@/constants";
import LoadingSkeleton from "./investments/LoadingSkeleton";
import WatchlistHeader from "./investments/WatchlistHeader";
import PriceTable from "./investments/PriceTable";
import RefreshTimer from "./investments/RefreshTimer";
import { useRefreshTimer } from "@/hooks/useRefreshTimer";
import { useSortedPrices } from "@/hooks/useSortedPrices";

export function InvestmentSection() {
  const { data, isFetching, isLoading, error } = usePrices(
    CRYPTO as unknown as string[],
    MARKETS as unknown as string[],
    REFRESH_MS
  );

  const prevPrices = useRef<Record<string, number>>({});
  const remaining = useRefreshTimer(REFRESH_MS, isFetching);
  const sortedData = useSortedPrices(data);

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-0">
      <WatchlistHeader />

      <CardContent className="px-0 md:px-6">
        {error && (
          <div className="text-sm text-red-600 bg-red-50 dark:bg-red-950/30 rounded-lg p-4 mb-4 border border-red-200 dark:border-red-800">
            Failed to load prices. Please try again later.
          </div>
        )}

        {isLoading && !error && <LoadingSkeleton />}

        {!isLoading && !error && sortedData.length === 0 && (
          <div className="text-sm text-muted-foreground py-8 text-center">
            No data available
          </div>
        )}

        {!isLoading && !error && sortedData.length > 0 && (
          <>
            <PriceTable data={sortedData} prevPrices={prevPrices} />
            <RefreshTimer isFetching={isFetching} remaining={remaining} />
          </>
        )}
      </CardContent>
    </div>
  );
}
