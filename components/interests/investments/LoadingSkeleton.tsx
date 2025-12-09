export default function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-3 md:grid-cols-7 gap-3 items-center py-3"
        >
          <span className="h-4 w-20 rounded bg-muted animate-pulse" />
          <span className="h-4 w-24 rounded bg-muted animate-pulse md:block hidden" />
          <span className="h-4 w-20 rounded bg-muted animate-pulse" />
          <span className="h-4 w-16 rounded bg-muted animate-pulse" />
          <span className="h-4 w-28 rounded bg-muted animate-pulse md:block hidden" />
          <span className="h-4 w-28 rounded bg-muted animate-pulse md:block hidden" />
          <span className="h-4 w-16 rounded bg-muted animate-pulse md:block hidden" />
        </div>
      ))}
    </div>
  );
}
