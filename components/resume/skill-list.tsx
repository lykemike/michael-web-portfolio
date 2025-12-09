"use client";

import type { SimpleIcon } from "simple-icons";
import BrandIcon from "@/components/resume/brand-icon";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../ui/item";
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";

type Skill = {
  name: string;
  icon: SimpleIcon;
  color?: string;
  category: string;
};

export default function SkillsSection({
  skills,
  className = "",
}: {
  skills: Skill[];
  className?: string;
}) {
  // Group skills by category
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  // Preserve original order of categories
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className={["space-y-4 md:space-y-6", className].join(" ")}>
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
              {category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {(skillsByCategory[category] ?? []).map((skill) => (
                <Item
                  className="hover:bg-muted transition-colors text-black"
                  variant="outline"
                  size="sm"
                  key={`${category}-${skill.name}`}
                >
                  <ItemMedia>
                    <BrandIcon
                      icon={skill.icon}
                      color={skill.color}
                      className="inline-block w-5 h-5 text-muted-foreground"
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{skill.name}</ItemTitle>
                  </ItemContent>
                </Item>
                // <span
                //   key={`${category}-${skill.name}`}
                //   className="px-4 py-2 text-sm rounded-md flex items-center gap-2 border border-border/60 bg-muted/30 hover:bg-muted transition-colors"
                // >
                //   <BrandIcon
                //     icon={skill.icon}
                //     color={skill.color}
                //     className="inline-block w-5 h-5 text-muted-foreground"
                //   />
                //   <span className="font-medium text-foreground truncate">
                //     {skill.name}
                //   </span>
                // </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
