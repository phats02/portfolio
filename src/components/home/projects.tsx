import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "@/assets/data/projects";

const Projects = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-josefin">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]"
          >
            <Link
              //   href={`/projects/${project.slug}`}
              href={"/"}
              className="flex flex-col gap-4"
            >
              {/* <IconFactory
                name={project.iconName}
                className="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"
              /> */}
              <div className="flex-col gap-2">
                <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="text-md text-gray-300">{project.desc[0]}</p>
              </div>
            </Link>
            <a
              className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
      <Link
        href="/projects"
        className="group flex items-center justify-start space-x-2 text-xl font-medium"
        target=""
      >
        <span>View All Projects</span>
        <FaArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default Projects;
