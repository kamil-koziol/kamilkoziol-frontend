import { Project, ProjectCategoriesColors } from "@/app/data/model/project";
import { getContrastColor } from "@/lib/colors";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const ProjectShowcase: React.FC<Project> = ({
  title,
  description,
  badges,
  desktop_img,
  phone_img,
}) => {
  return (
    <div className="container p-40 rounded-2xl bg-neutral-800">
      <div className="flex flex-col">
        <h1 className="mb-3 text-5xl font-bold text-neutral-50">{title}</h1>
        <div className="flex flex-wrap gap-2 pt-2 pb-4 mb-3">
          {badges &&
            badges.map((badge, idx) => {
              let backgroundColor = ProjectCategoriesColors[badge] || "#fff";

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
        <p className="mb-4 w-3/4 text-lg text-neutral-300">{description}</p>
        <Button className="mb-12 w-32" size={"default"}>
          See more {">"}
        </Button>
        <div className="relative z-10 w-full min-h-[550px]">
          <Image
            src={phone_img}
            alt="mobile z-20"
            width={200}
            height={125}
            className="absolute right-0 z-10 bottom-[-70px]"
          />
          <Image
            src={desktop_img}
            alt="desktop"
            className="object-contain object-left aspect-auto"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
