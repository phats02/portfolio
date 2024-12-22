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
import {
  IoLogoCss3,
  IoLogoElectron,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAstro,
  SiContentful,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiMongodb,
  SiPostman,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import MUIIcon from "@/assets/images/mui.svg";
import { VscVscode } from "react-icons/vsc";

interface SkillsInterface {
  id: number;
  title: string;
  children: {
    id: number;
    title: string;
    isSpan?: boolean;
    icon: ReactNode;
  }[];
}

export const skills: SkillsInterface[] = [
  {
    id: 1,
    title: "Web Development",
    children: [
      {
        id: 1,
        title: "HTML",
        icon: <IoLogoHtml5 size={32} />,
      },
      {
        id: 2,
        title: "CSS",
        icon: <IoLogoCss3 size={32} />,
      },
      {
        id: 3,
        title: "JavaScript",
        icon: <IoLogoJavascript size={32} />,
      },
      {
        id: 4,
        title: "TypeScript",
        icon: <BiLogoTypescript size={32} />,
      },
      {
        id: 5,
        title: "React",
        icon: <IoLogoReact size={32} />,
      },
      {
        id: 6,
        title: "Next.js",
        icon: <RiNextjsFill size={32} />,
      },
      {
        id: 7,
        title: "Astro",
        icon: <SiAstro size={32} />,
      },
      {
        id: 8,
        title: "Tailwind CSS",
        icon: <RiTailwindCssFill size={32} />,
      },
      {
        id: 9,
        title: "Ant Design",
        icon: <AiOutlineAntDesign size={32} />,
      },
      {
        id: 10,
        title: "Bootstrap",
        icon: <FaBootstrap size={32} />,
      },
      {
        id: 11,
        title: "Material UI",
        icon: <Image src={MUIIcon} alt="mui-icon" width={32} height={32} />,
      },
      {
        id: 12,
        title: "Vite",
        icon: <SiVite size={32} />,
      },
    ],
  },

  {
    id: 2,
    title: "App Development",
    children: [
      {
        id: 1,
        title: "React Native",
        icon: <TbBrandReactNative size={32} />,
      },
      {
        id: 2,
        title: "Expo",
        icon: <SiExpo size={32} />,
      },
    ],
  },

  {
    id: 3,
    title: "Backend Development",
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
        title: "GraphQL",
        icon: <SiGraphql size={32} />,
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
      {
        id: 6,
        title: "Redis",
        icon: <DiRedis size={36} />,
      },
      {
        id: 7,
        title: "Contentful",
        icon: <SiContentful size={32} />,
      },
    ],
  },

  {
    id: 4,
    title: "Cloud & Deployment",
    children: [
      {
        id: 1,
        title: "Google Cloud Platform",
        isSpan: true,
        icon: <SiGooglecloud size={32} />,
      },
      {
        id: 2,
        title: "Amazon Web Services",
        isSpan: true,
        icon: <FaAws size={32} />,
      },
      {
        id: 3,
        title: "Vercel",
        icon: <SiVercel size={32} />,
      },
    ],
  },

  {
    id: 5,
    title: "Tools & Collaboration",
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
        title: "Postman",
        icon: <SiPostman size={32} />,
      },
      {
        id: 4,
        title: "Visual Studio Code",
        isSpan: true,
        icon: <VscVscode size={32} />,
      },
    ],
  },

  {
    id: 6,
    title: "Desktop Development",
    children: [
      {
        id: 1,
        title: "Electron",
        icon: <IoLogoElectron size={32} />,
      },
    ],
  },
];
