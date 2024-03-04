import { Project } from "@/app/data/model/project";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface ProjectShowcaseProps extends React.ComponentPropsWithoutRef<"div"> {
  project: Project;
  reversed: boolean;
  seeMoreLink?: string;
}

const projects_path = "/assets/projects/";

const ProjectShowcase = ({
  project,
  className,
  reversed,
  seeMoreLink,
}: ProjectShowcaseProps) => {
  return (
    <div className={cn("border-t border-neutral-700 md:py-8 w-full py-8", className)}>
      <div
        className={cn(
          "flex",
          reversed ? "md:flex-row-reverse" : "md:flex-row",
          "items-center",
          "",
          "md:gap-24", "gap-4",
          "flex-col",
        )}
      >
        <div className="md:w-1/2">
          <h1 className="mb-3 text-4xl font-bold text-neutral-50 md:text-5xl">
            {project.title}
          </h1>

          <div className="flex h-5 items-center space-x-4 text-sm my-6">
            {project.badges.map((badge, idx) => {
              let useSeparator = idx !== project.badges.length - 1;
              return (
                <React.Fragment key={badge}>
                  <div key={badge} className="text-neutral-400">{badge}</div>
                  {useSeparator && <Separator orientation="vertical" className="bg-primary/60"/>}
                </React.Fragment>
              );
            })}
          </div>

          <p className="text-lg text-neutral-300">
            {project.description}
          </p>

          {seeMoreLink && <Link
            className="md:text-md text- w-32 text-xl hover:underline"
            href={seeMoreLink}
            target="_blank"
          >
            <Button className="mb-12 mt-8">See more {">"}</Button>
          </Link>}
        </div>

        <div className="relative z-10 h-full md:min-h-[500px] min-h-[300px] md:w-1/2 w-full md:mt-0">
          <Image
            src={projects_path + project.desktop_img}
            alt="desktop"
            className="aspect-auto object-contain object-top md:object-left"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
