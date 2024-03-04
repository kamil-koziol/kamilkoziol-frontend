import ProjectShowcase from "@/components/projectShowcase";
import { cn } from "@/lib/utils";
import projects from "@/public/data/projects.json";
import React from "react";

interface ProjectsProps extends React.ComponentPropsWithoutRef<"div"> {}

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <div className={cn("bg-dark", className)} id="projects">
      <div className="container flex flex-col items-center md:p-24 p-6">

        <h1 className="mb-14 self-start md:text-6xl text-5xl font-semibold text-neutral-100">
          Projects.
        </h1>

        <div className="flex flex-col md:gap-14">
          {projects.projects.map((project, idx) => {
            return <ProjectShowcase key={project.title} project={project} reversed={idx%2==1} seeMoreLink={project.link}/>;
          })}
        </div>
      </div>
    </div>
  );
};
