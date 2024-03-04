import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";

import { ProjectCategoriesColors } from "@/app/data/model/project";
import { getContrastColor } from "@/lib/colors";

interface BadgeListProps extends React.ComponentPropsWithoutRef<"div"> {
  badges: string[];
}

const BadgeList = ({ className, badges }: BadgeListProps) => {
  return (
    <div className={cn("flex flex-wrap gap-2 py-4", className)}>
      {badges.map((badge, idx) => {
        let backgroundColor = ProjectCategoriesColors[badge] || "#fff";
        backgroundColor = "#6E70D2"

        return (
          <Badge
            key={idx}
            variant="secondary"
            className=""
            style={{
              backgroundColor,
              color: getContrastColor(backgroundColor, true),
            }}
          >
            {badge}
          </Badge>
        );
      })}
    </div>
  );
};

export default BadgeList;
