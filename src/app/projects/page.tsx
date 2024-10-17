import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "@/components/projects/projectCard";
import { projects } from "@/assets/data/projects";

export default function Page() {
  return (
    <div className="w-[90%] lg:w-[70%] xl:w-[60%] my-8 flex flex-col gap-8">
      <h2 className="text-3xl font-bold font-josefin">Projects</h2>
      <div className="w-full flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <a
        href="https://github.com/stars/Utkarsh-Singhal-26/lists/projects-man-technologist"
        className="group flex items-center justify-start space-x-2 text-xl font-medium"
        target="_blank"
      >
        <span>View more on Github</span>
        <FaArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
