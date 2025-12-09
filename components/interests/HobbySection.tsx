import React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "../ui/item";

export function HobbySection({
  title,
  description,
  hobbies,
}: {
  title: string;
  description: string;
  hobbies: {
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
      {hobbies.map((hobby, index) => (
        <Item
          key={index}
          className="hover:bg-muted transition-colors bg-white w-full"
          variant="outline"
          size="sm"
        >
          <ItemMedia>
            <img
              className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded-md"
              src={hobby.image || "/placeholder.svg"}
              alt={hobby.alt}
            />
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-xl sm:text-2xl font-bold">
              {hobby.title}
            </ItemTitle>
            <ItemDescription className="text-sm sm:text-base">
              {hobby.description}
            </ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  );
}
