"use client";
import { projects } from "@/assets/data/projects";
import socials from "@/assets/data/socials";
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import KResults from "./KResults";

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  const { push } = useRouter();

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      keywords: "index root",
      shortcut: ["h"],
      perform: () => push("/"),
      section: "Pages",
      icon: <GoHome />,
    },
    {
      id: "projects",
      name: "Projects",
      keywords: "projects creations apps repositories",
      shortcut: ["p"],
      perform: () => push("/projects"),
      section: "Pages",
      icon: <FaRegLightbulb />,
    },
  ];

  socials.map((social) => {
    actions.push({
      id: social.id,
      name: social.name,
      perform: () => window.open(social.url),
      section: "Socials",
      icon: social.icon,
    });
  });

  projects.forEach((project) => {
    actions.push({
      id: project.id.toString(),
      name: project.title,
      perform: () => push("/projects/" + project.urlTitle),
      parent: "projects",
      section: "Projects",
    });
  });

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-30 bg-secondary/60 backdrop-blur-md backdrop-filter">
          <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-xl border-[1px] border-tertiary bg-secondary/60 px-4 drop-shadow-2xl ">
            <div className="mx-2 flex items-end justify-between py-4">
              <span>
                <CiSearch className="mr-2 mb-0.5 h-5 w-5 text-gray-100" />
              </span>
              <KBarSearch className="w-full rounded-md border-b border-none border-gray-300 bg-transparent pt-2 text-gray-100 outline-none" />
              <kbd className="rounded-md border-[1px] border-b-2 border-[#4a4a4a] bg-[#333333] px-2 py-0.5 text-sm">
                esc
              </kbd>
            </div>

            <KResults />
            <div className="h-4" />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KProvider;
