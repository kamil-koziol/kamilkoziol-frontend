import ProjectShowcase from "@/components/project/projectShowcase";
import projects from "@/public/data/projects.json";

export const Projects = () => {
  return (
    <div className="bg-dark">
      <div className="container flex flex-col items-center p-24">
        <h1 className="self-start mb-14 text-6xl font-semibold text-neutral-100">
          Projects.
        </h1>

        <div className="flex flex-col gap-12">
          {projects.projects.map((project, idx) => {
            const projects_path = "/assets/projects/";
            return (
              <ProjectShowcase
                key={idx}
                title={project.title}
                description={project.description}
                desktop_img={projects_path + project.desktop_img}
                phone_img={projects_path + project.phone_img}
                badges={project.badges}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
