import Image from "next/image";
import { ReactNode } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAstro,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import MUIIcon from "@/assets/images/mui.svg";

interface SkillsInterface {
  id: number;
  title: string;
  children: {
    id: number;
    title: string;
    icon: ReactNode;
  }[];
}

export const skills: SkillsInterface[] = [
  {
    id: 1,
    title: "Frontend Technologies",
    children: [
      {
        id: 1,
        title: "JavaScript",
        icon: <IoLogoJavascript size={32} />,
      },
      {
        id: 2,
        title: "React",
        icon: <IoLogoReact size={32} />,
      },
      {
        id: 3,
        title: "Next.js",
        icon: <RiNextjsFill size={32} />,
      },
      {
        id: 4,
        title: "Typescript",
        icon: <BiLogoTypescript size={32} />,
      },
      {
        id: 5,
        title: "Astro",
        icon: <SiAstro size={32} />,
      },
      {
        id: 6,
        title: "Tailwind CSS",
        icon: <RiTailwindCssFill size={32} />,
      },
      {
        id: 7,
        title: "Ant Design",
        icon: <AiOutlineAntDesign size={32} />,
      },
      {
        id: 8,
        title: "Bootstrap",
        icon: <FaBootstrap size={32} />,
      },
      {
        id: 9,
        title: "Material UI",
        icon: <Image src={MUIIcon} alt="mui-icon" width={32} height={32} />,
      },
    ],
  },

  {
    id: 2,
    title: "Backend Technologies",
    children: [
      {
        id: 1,
        title: "Node.js",
        icon: <FaNodeJs size={32} />,
      },
      {
        id: 2,
        title: "Express",
        icon: <SiExpress size={32} />,
      },
      {
        id: 3,
        title: "Redis",
        icon: <DiRedis size={36} />,
      },
      {
        id: 4,
        title: "Firebase",
        icon: <SiFirebase size={32} />,
      },
      {
        id: 5,
        title: "MongoDB",
        icon: <SiMongodb size={32} />,
      },
    ],
  },

  {
    id: 3,
    title: "Development Tools",
    children: [
      {
        id: 1,
        title: "Git",
        icon: <FaGitAlt size={32} />,
      },
      {
        id: 2,
        title: "GitHub",
        icon: <FaGithubSquare size={32} />,
      },
      {
        id: 3,
        title: "Vercel",
        icon: <SiVercel size={28} />,
      },
      {
        id: 4,
        title: "Postman",
        icon: <SiPostman size={32} />,
      },
      {
        id: 5,
        title: "Google Cloud Platform",
        icon: <SiGooglecloud size={32} />,
      },
      {
        id: 6,
        title: "Amazon Web Services",
        icon: <FaAws size={32} />,
      },
    ],
  },
];
