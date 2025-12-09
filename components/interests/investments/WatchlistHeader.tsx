import { CardHeader } from "@/components/ui/card";

export default function WatchlistHeader() {
  return (
    <CardHeader className="border-b border-muted/30 px-0 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <img
          src="/purr/detective-purr.png"
          alt="Detective Purr"
          className="w-50 h-50 hidden md:block"
        />
        <div>
          <p className="text-xl md:text-2xl font-bold">My Watchlist</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-2">
            Tracking markets that shape the future. From digital currencies
            revolutionizing finance to indices reflecting economic health, I
            monitor these assets to understand trends, spot opportunities, and
            make informed decisions about where value is heading.
          </p>
        </div>
      </div>
    </CardHeader>
  );
}
