import { StaticImageData } from "next/image";
import LibraryImage from "@/assets/images/library.png";
import GithubImage from "@/assets/images/github.png";
import NotesImage from "@/assets/images/notes.png";
import ProfileImage from "@/assets/images/profile.png";

interface ProjectsInterface {
  id: number;
  title: string;
  desc: string[];
  tech: string[];
  image: StaticImageData;
  link: string;
  githubLink?: string;
}

export const projects: ProjectsInterface[] = [
  {
    id: 1,
    title: "VSE&T Library, VIPS-TC",
    desc: [
      "Developed and launched a functional library website for a technical institution",
      "Implemented user-friendly interface to improve accessibility of library resources",
      "Designed responsive layout ensuring compatibility across desktop and mobile devices",
    ],
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: LibraryImage,
    link: "https://btech.library.vips.edu/",
  },
  {
    id: 2,
    title: "Profile Management System",
    desc: [
      "Developed a full-stack profile management system application",
      "Created intuitive user interface for easy profile creation, editing, and management",
      "Designed and implemented database schema for efficient data storage and retrieval",
      "Implemented responsive design for optimal user experience across devices",
    ],
    tech: ["React", "Firebase"],
    image: ProfileImage,
    link: "https://profile-management-system.vercel.app/",
    githubLink:
      "https://github.com/Utkarsh-Singhal-26/profile-management-system",
  },
  {
    id: 3,
    title: "Github Profile Finder",
    desc: [
      "Implemented dynamic content fetching from GitHub API to display up-to-date project information",
      "Designed a responsive and visually appealing interface to highlight coding projects and skills",
    ],
    tech: ["React", "Github API"],
    image: GithubImage,
    link: "https://github-profile-utkarsh.netlify.app/",
    githubLink: "https://github.com/Utkarsh-Singhal-26/github-profile-viewer",
  },
  {
    id: 4,
    title: "Notes App",
    desc: [
      "Implemented user-friendly interface for creating, editing, and organizing notes",
      "Implemented local storage for persistent note saving",
      "Implemented markdown support or rich text editing capabilities",
    ],
    tech: ["React"],
    image: NotesImage,
    link: "https://notes-app-utkarsh.vercel.app/",
    githubLink:
      "https://github.com/Utkarsh-Singhal-26/website-training/tree/main/notes-app",
  },
];
