import { StaticImageData } from "next/image";
import LibraryImage from "@/assets/images/library.png";
import TodoImage from "@/assets/images/todo.png";
import GithubImage from "@/assets/images/github.png";
import NotesImage from "@/assets/images/notes.png";
import ProfileImage from "@/assets/images/profile.png";

interface ProjectsInterface {
  id: number;
  title: string;
  urlTitle: string;
  desc: string[];
  note?: string;
  tech: string[];
  image: StaticImageData;
  link: string;
  githubLink?: string;
}

export const projects: ProjectsInterface[] = [
  {
    id: 1,
    title: "VSE&T Library, VIPS-TC",
    urlTitle: "vset-library",
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
    title: "ToDo Extension with Chrome Storage API",
    urlTitle: "todo-extension",
    desc: [
      "Developed and launched a Chrome extension for task management using Chrome Storage API",
      "Implemented user-friendly interface to enhance productivity and task tracking",
      "Designed responsive layout ensuring seamless experience across different screen sizes and browsers",
      "Integrated message broadcasting for real-time updates and synchronization",
    ],
    note: "Works perfectly when used with the Chrome extension for optimal functionality and experience.",
    tech: [
      "React",
      "Tailwind CSS",
      "Bowser Extension",
      "Chrome Storage API",
      "Message Broadcasting",
    ],
    image: TodoImage,
    link: "https://todo-extension-webapp.vercel.app/",
    githubLink: "https://github.com/Utkarsh-Singhal-26/todo-extension",
  },
  {
    id: 3,
    title: "Profile Management System",
    urlTitle: "profile-management",
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
    id: 4,
    title: "Github Profile Finder",
    urlTitle: "github-profile",
    desc: [
      "Implemented dynamic content fetching from GitHub API to display up-to-date project information",
      "Designed a responsive and visually appealing interface to highlight coding projects and skills",
    ],
    tech: ["React", "Github API"],
    image: GithubImage,
    link: "https://github-profile-viewer-utkarsh.vercel.app/",
    githubLink: "https://github.com/Utkarsh-Singhal-26/github-profile-viewer",
  },
  {
    id: 5,
    title: "Notes App",
    urlTitle: "notes-app",
    desc: [
      "Implemented user-friendly interface for creating, editing, and organizing notes",
      "Implemented local storage for persistent note saving",
      "Implemented markdown support or rich text editing capabilities",
    ],
    tech: ["React"],
    image: NotesImage,
    link: "https://notes-app-utkarsh.vercel.app/",
    githubLink: "https://github.com/Utkarsh-Singhal-26/notes-app",
  },
];
