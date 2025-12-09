"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  image: string;
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
}

export default function ProjectCard({
  title,
  href,
  description,
  tags = [],
  image,
  links,
}: ProjectCardProps) {
  return (
    <Dialog>
      {/* Card */}
      <DialogTrigger asChild>
        <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg cursor-pointer active:scale-95">
          {/* Image Container - Fixed Height */}
          <div className="relative h-48 w-full overflow-hidden bg-muted shrink-0">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover object-top transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
            />
            {/* View Project Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
              <span className="text-white font-semibold text-lg flex items-center gap-2">
                View Project
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-4">
            {/* Title - Fixed Height */}
            <h3 className="font-semibold text-lg line-clamp-2 mb-2 ">
              {title}
            </h3>

            {/* Description - Fixed Height */}
            <p className="text-xs text-muted-foreground line-clamp-3 h-12 mb-3">
              {description}
            </p>

            {/* Tech Stack Preview */}
            <div className="mt-auto flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          </div>

          {/* Links */}
          {!!links?.length && (
            <div className="border-t border-border bg-muted/50 px-4 py-2 shrink-0">
              <div className="flex gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.icon}
                    {l.type}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogTrigger>

      <DialogContent className=" sm:overflow-y-auto max-h-screen overflow-hidden flex flex-col rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto sm:overflow-visible space-y-6 px-1">
          {/* Image */}
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-auto object-cover object-top"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
              About
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Links Footer */}
        {!!links?.length && (
          <DialogFooter className="border-t border-border/50 pt-4 mt-2 bg-linear-to-t from-background">
            <div className="w-full flex gap-2 flex-wrap justify-start sm:justify-end">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted/60"
                >
                  {l.icon}
                  <span>{l.type}</span>
                </Link>
              ))}
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
