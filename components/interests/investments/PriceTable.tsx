import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow as TableRowComponent,
} from "@/components/ui/table";
import { PriceRow } from "@/types";
import PriceTableRow from "./PriceTableRow";

interface PriceTableProps {
  data: PriceRow[];
  prevPrices: React.MutableRefObject<Record<string, number>>;
}

export default function PriceTable({ data, prevPrices }: PriceTableProps) {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <Table>
        <TableHeader className="bg-neutral-100">
          <TableRowComponent>
            <TableHead className="font-semibold text-xs md:text-sm py-2">
              Name
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2 hidden md:table-cell">
              Pair
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2">
              Price
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2">
              24h
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2 hidden md:table-cell">
              Market Cap
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2 hidden md:table-cell">
              Volume
            </TableHead>
            <TableHead className="font-semibold text-xs md:text-sm py-2 hidden md:table-cell">
              Type
            </TableHead>
          </TableRowComponent>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <PriceTableRow key={row.symbol} row={row} prevPrices={prevPrices} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
