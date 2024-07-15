import Image from "next/image";
import { ReactNode } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import {
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
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import MUIIcon from "@/assets/images/mui.svg";

interface SkillsInterface {
  id: number;
  title: string;
  children: {
    id: number;
    title: string;
    desc: string;
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
        desc: "High-level, versatile programming language for web development.",
        icon: <IoLogoJavascript size={32} />,
      },
      {
        id: 2,
        title: "React",
        desc: "Popular JavaScript library for building user interfaces.",
        icon: <IoLogoReact size={32} />,
      },
      {
        id: 3,
        title: "Next.js",
        desc: "React framework for production-grade applications and static websites.",
        icon: <RiNextjsFill size={32} />,
      },
      {
        id: 4,
        title: "Typescript",
        desc: "A strongly typed programming language for JavaScript.",
        icon: <BiLogoTypescript size={32} />,
      },
      {
        id: 5,
        title: "Astro",
        desc: "Static site generator for building fast, content-focused websites.",
        icon: <SiAstro size={32} />,
      },
      {
        id: 6,
        title: "Tailwind CSS",
        desc: "Utility-first CSS framework for rapid UI development.",
        icon: <RiTailwindCssFill size={32} />,
      },
      {
        id: 7,
        title: "Ant Design",
        desc: "Comprehensive UI component library for React applications.",
        icon: <AiOutlineAntDesign size={32} />,
      },
      {
        id: 8,
        title: "Bootstrap",
        desc: "Popular CSS framework for developing responsive and mobile-first websites.",
        icon: <FaBootstrap size={32} />,
      },
      {
        id: 9,
        title: "Material UI",
        desc: "React component library implementing Google's Material Design.",
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
        desc: "JavaScript runtime for building scalable network applications.",
        icon: <FaNodeJs size={32} />,
      },
      {
        id: 2,
        title: "Express",
        desc: "Fast, unopinionated, minimalist web framework for Node.js.",
        icon: <SiExpress size={32} />,
      },
      {
        id: 3,
        title: "Redis",
        desc: "NoSQL database for caching and data storage.",
        icon: <DiRedis size={36} />,
      },
      {
        id: 4,
        title: "Firebase",
        desc: "Platform for building mobile and web applications without server-side programming.",
        icon: <SiFirebase size={32} />,
      },
      {
        id: 5,
        title: "MongoDB",
        desc: "NoSQL database for storing data in flexible, JSON-like documents.",
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
        desc: "Distributed version control system for tracking changes in source code.",
        icon: <FaGitAlt size={32} />,
      },
      {
        id: 2,
        title: "GitHub",
        desc: "Web-based platform for version control and collaboration using Git.",
        icon: <FaGithubSquare size={32} />,
      },
      {
        id: 3,
        title: "Vercel",
        desc: "Platform for deploying web projects with zero configuration.",
        icon: <SiVercel size={28} />,
      },
      {
        id: 4,
        title: "Netlify",
        desc: "Platform for automating web projects with continuous deployment.",
        icon: <SiNetlify size={32} />,
      },
      {
        id: 5,
        title: "Google Cloud Platform",
        desc: "Cloud-based platform for building and deploying applications.",
        icon: <SiGooglecloud size={32} />,
      },
    ],
  },
];
