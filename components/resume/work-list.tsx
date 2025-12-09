import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MarkdownRenderer from "@/components/ReactMarkdown";
import type { WorkExperience } from "@/types";

export default function WorkList({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  logo,
}: WorkExperience) {
  return (
    <section className="py-2">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex gap-3 sm:gap-4">
            {/* Logo container */}
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-card border flex items-center justify-center text-base sm:text-lg">
              {logo}
            </div>

            {/* Content section */}
            <div className="flex-1 min-w-0">
              {/* Header with title and date badge */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {company}
                    {location && <> · {location}</>}
                  </p>
                </div>
                <Badge className="h-6 px-2 text-xs font-medium rounded-sm shrink-0 self-start">
                  {startDate} – {endDate}
                </Badge>
              </div>

              {/* Divider */}
              <div className="border-b mt-2 mb-2" />

              {/* Description */}
              <MarkdownRenderer content={description} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
