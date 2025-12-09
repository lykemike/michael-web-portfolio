import LiveDot from "./LiveDot";

interface RefreshTimerProps {
  isFetching: boolean;
  remaining: number;
}

export default function RefreshTimer({
  isFetching,
  remaining,
}: RefreshTimerProps) {
  return (
    <div className="flex items-center justify-end text-right text-xs text-muted-foreground border-t border-muted/30 pt-4 mt-4 gap-2">
      <LiveDot active={isFetching} />
      {isFetching ? "Updating…" : `Next refresh in ${remaining}s`}
    </div>
  );
}
