"use client";
import NextImage, { StaticImageData } from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { cleanLink } from "@/utils/helpers";

interface ProjectsInterface {
  id: number;
  title: string;
  urlTitle: string;
  desc: string[];
  tech: string[];
  image: StaticImageData;
  link: string;
  githubLink?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectsInterface>(
  (
    { id, title, urlTitle, desc, tech, image, link, githubLink },
    ref
  ): JSX.Element => {
    return (
      <div
        className="flex flex-col space-y-8 rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 md:h-48 md:flex-row md:space-y-0 md:space-x-8"
        ref={ref}
      >
        <div className="overflow-hidden rounded-lg md:w-72">
          <Link href={`/projects/${urlTitle}`}>
            <div className="relative h-60 w-full transition duration-200 hover:opacity-60 md:h-full md:w-72">
              <NextImage
                src={image}
                alt={title}
                className="rounded-xl max-md:object-cover"
                layout="fill"
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-col space-y-2">
            <Link
              href={`/projects/${urlTitle}`}
              className="transition duration-200 hover:opacity-60"
            >
              <h2 className="text-2xl font-bold">{title}</h2>
            </Link>
            <p className="text-sm text-gray-300">{desc[0]}</p>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {link && (
                <a
                  href={link}
                  className="gradient-underline relative flex space-x-2 items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{cleanLink(link)}</span>{" "}
                  <FaArrowRight className="transform -rotate-45" />
                </a>
              )}
            </div>
          </div>
          <Link
            href={`/projects/${urlTitle}`}
            className="mt-4 gradient-underline inline-block relative"
          >
            <span>Learn More</span>
          </Link>
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
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
