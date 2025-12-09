import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import type { Achievement } from "@/types";
import MarkdownRenderer from "../ReactMarkdown";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function AchievementList({
  title,
  issuer,
  startDate,
  endDate,
  description,
  logo,
  image,
  credential,
}: Achievement) {
  return (
    <section className="py-2">
      <Card className="border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex gap-3 sm:gap-4">
            {/* Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-card border flex items-center justify-center text-base sm:text-lg">
              <img src={logo} alt={logo} className="rounded-md" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-[11px] sm:text-xs mt-0.5">
                    {issuer}
                  </p>
                </div>
                <Badge className="h-6 px-2 text-xs font-medium rounded-sm shrink-0 self-start">
                  {startDate} – {endDate}
                </Badge>
              </div>

              <div className="border-b mt-2 mb-2" />

              {/* Markdown description */}
              <MarkdownRenderer content={description} />

              <div className="grid grid-cols-4 gap-2">
                {image?.map((img, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <img
                        src={img.src}
                        alt={title}
                        className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer rounded-md"
                      />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{img.title}</DialogTitle>
                      </DialogHeader>
                      <div className="flex items-center gap-2">
                        <div className="grid flex-1 gap-2">
                          <a
                            href={img.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="block"
                          >
                            <img
                              src={img.src}
                              alt={title}
                              className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer rounded-md"
                            />
                          </a>
                        </div>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
