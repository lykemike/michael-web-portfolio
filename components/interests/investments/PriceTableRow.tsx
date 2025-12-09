import React from "react";
import Image from "next/image";
import { TableCell, TableRow } from "@/components/ui/table";
import { PriceRow } from "@/types";
import { SYMBOL_IMAGES } from "@/constants";
import { getCategory, formatPrice, formatUSD } from "@/helpers";

interface PriceRowProps {
  row: PriceRow;
  prevPrices: React.MutableRefObject<Record<string, number>>;
}

export default function PriceTableRow({ row, prevPrices }: PriceRowProps) {
  const prevPrice = prevPrices.current[row.symbol];
  const direction =
    prevPrice == null
      ? 0
      : row.priceUsd > prevPrice
        ? 1
        : row.priceUsd < prevPrice
          ? -1
          : 0;

  prevPrices.current[row.symbol] = row.priceUsd;

  const priceColor =
    direction > 0
      ? "text-emerald-600"
      : direction < 0
        ? "text-red-600"
        : "text-foreground";

  const changeColor =
    row.change24hPct >= 0 ? "text-emerald-600" : "text-red-600";
  const imageUrl = SYMBOL_IMAGES[row.symbol] || "/placeholder.svg";

  return (
    <TableRow className="hover:bg-muted/40 border-b border-muted/40 transition-colors text-xs">
      <TableCell className="font-semibold py-2">
        <div className="flex items-center gap-2">
          <Image
            src={imageUrl}
            alt={row.symbol}
            width={24}
            height={24}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="md:hidden">{row.symbol}</span>
            <span className="hidden md:inline">{row.name}</span>
          </div>
        </div>
      </TableCell>

      <TableCell className="font-semibold hidden md:table-cell">
        {row.symbol} / USD
      </TableCell>

      <TableCell
        className={`tabular-nums transition-colors font-mono font-medium ${priceColor}`}
        title={`USD ${row.priceUsd}`}
      >
        ${formatPrice(row.priceUsd)}
      </TableCell>

      <TableCell className={`font-mono font-medium ${changeColor}`}>
        <div className="flex items-center gap-1">
          <span>{row.change24hPct >= 0 ? "↑" : "↓"}</span>
          <span>{Math.abs(row.change24hPct).toFixed(2)}%</span>
        </div>
      </TableCell>

      <TableCell className="text-muted-foreground hidden md:table-cell">
        {row.marketCapUsd ? formatUSD(row.marketCapUsd) : "—"}
      </TableCell>

      <TableCell className="text-muted-foreground hidden md:table-cell">
        {row.volume24hUsd ? formatUSD(row.volume24hUsd) : "—"}
      </TableCell>

      <TableCell className="font-medium text-muted-foreground uppercase tracking-wide hidden md:table-cell">
        {getCategory(row.symbol, row.source)}
      </TableCell>
    </TableRow>
  );
}
