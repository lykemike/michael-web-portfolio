import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import type { Education } from "@/types";
import MarkdownRenderer from "@/components/ReactMarkdown"; // 👈 import our MarkdownRenderer

export default function EducationList({
  degree,
  institution,
  location,
  period,
  description,
  logo,
}: Education) {
  return (
    <section className="py-2">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex gap-3 sm:gap-4">
            {/* Institution Logo */}
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-card rounded-md flex items-center justify-center text-lg sm:text-xl border">
              {logo}
            </div>

            {/* Education Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                    {institution}
                  </h3>
                  <p className="text-muted-foreground text-[11px] sm:text-xs mt-0.5">
                    {location} · {degree}
                  </p>
                </div>
                <Badge className="h-6 px-2 text-xs font-medium rounded-sm shrink-0 self-start">
                  {period}
                </Badge>
              </div>

              {/* Divider */}
              <div className="border-b mt-2 mb-2" />

              {/* Markdown Description */}
              <MarkdownRenderer content={description} />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
