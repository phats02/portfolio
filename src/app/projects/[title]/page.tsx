"use client";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { projects } from "@/assets/data/projects";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";

export default function ProjectPage({ params }: { params: { title: string } }) {
  const project = projects.find((p) => p.urlTitle === params.title);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-[50%] my-8 flex flex-col gap-4">
      <div className="flex space-x-8">
        {/* <IconFactory
          name={project.iconName}
          className="h-16 w-16 rounded-xl bg-tertiary p-2 shadow-md"
        /> */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold font-josefin">{project.title}</h1>
          <p className="text-sm text-gray-300">{project.desc[0]}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        {project.link && (
          <a
            href={project.link}
            className="gradient-underline relative flex space-x-2 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{project.link}</span>
            <FaArrowRight className="transform -rotate-45" />
          </a>
        )}

        {project.githubLink && (
          <a
            href={project.githubLink}
            className="gradient-underline relative flex gap-2 space-x-2 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
            <span>{getGitHubOwnerAndRepoFromLink(project.githubLink)}</span>
            <FaArrowRight className="transform -rotate-45" />
          </a>
        )}
      </div>

      <div className="my-4 overflow-hidden rounded-lg border-[1px] border-tertiary p-0 shadow-md">
        <NextImage
          layout="responsive"
          src={project.image}
          alt={project.title}
        />
      </div>

      <ul className="list-disc ml-6">
        {project.desc.map((desc, index) => (
          <li key={index} className="text-gray-300">
            {desc}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-tertiary text-sm rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .gradient-underline {
          text-decoration: none;
        }
        .gradient-underline span {
          position: relative;
        }
        .gradient-underline span::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-image: linear-gradient(to right, #be185d, #1d4ed8);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0% 2px;
          transition: background-size 150ms ease-in-out;
        }
        .gradient-underline:hover span::after {
          background-size: 100% 2px;
        }
      `}</style>
    </div>
  );
}
