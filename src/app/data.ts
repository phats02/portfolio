import LibraryImage from "@/assets/library.png";
import NotesImage from "@/assets/notes-markdown.png";
import TodoImage from "@/assets/todo.png";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: any;
}

export const DATA = {
  HEADER: {
    NAME: "Utkarsh Singhal",
    AGE: "20",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/1U1NnGm_QubGMWXMFYYi_SdGX2dC6XiyV/view?usp=drive_link",
    EMAIL: "mailto:singhalutkarsh26@gmail.com",
    GITHUB: "https://github.com/Utkarsh-Singhal-26",
    LINKEDIN: "https://www.linkedin.com/in/singhalutkarsh26",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. I thrive on solving complex problems, optimizing performance, and creating seamless user experiences.",
    EXPERTISE:
      "My expertise lies in Next.js, TypeScript, Node.js, and Cloud technologies, and I enjoy working across the stack to bring ideas to life.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "Aardo Solutions": {
      WEBSITE: "https://www.aardosolutions.com/",
      POSITION: "Software Developer",
      LOCATION: "Remote",
      DURATION: "Sept, 2024 - Present",
      DESCRIPTION: [
        "Developed and maintained scalable web applications to enhance user engagement and operational efficiency.",
        "Hosted and managed servers on AWS EC2, configured domains, and implemented SSL certificates for secure access.",
        "Collaborated with cross-functional teams to design and implement scalable solutions.",
        "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Contentful",
        "AWS",
        "GCP",
        "Vercel",
        "Nginx",
        "Git & Github",
      ],
    },
    "Vivekananda Institute of Professional Studies - Technical Campus (VIPS-TC)":
      {
        WEBSITE: "https://vips.edu/",
        POSITION: "Software Developer Intern",
        LOCATION: "Hybrid - Delhi, India",
        DURATION: "Nov, 2023 - Present",
        DESCRIPTION: [
          "Assisted in the development of full-stack applications to support academic initiatives.",
          "Implemented cloud-based solutions using Google Cloud Platform (GCP) services.",
          "Participated in code reviews and contributed to the optimization of existing codebases.",
        ],
        TECH_STACK: [
          "React.js",
          "Tailwind CSS",
          "Material UI",
          "Firebase",
          "GCP",
          "Vercel",
          "Git & Github",
        ],
      },
    Requestly: {
      WEBSITE: "https://requestly.com/",
      POSITION: "Product Engineer Intern",
      LOCATION: "Hybrid - Delhi, India",
      DURATION: "Aug, 2024 - Oct, 2024",
      DESCRIPTION: [
        "Researched and analyzed various API testing platforms (Kubesense, LevoAI, Wallarm, Traceable, Safe Security, Keploy) to evaluate features, security, and integration capabilities.",
        "Worked extensively with AWS services (Lambda, Kinesis, S3, API Gateway, EC2, Route 53) to manage infrastructure, automate processes, and optimize security configurations.",
        "Built a To-Do Chrome Extension using Chrome Storage API, enabling users to save and manage tasks directly within their browser.",
      ],
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "AWS",
        "Chrome Extensions",
        "Git & Github",
      ],
    },
  },

  PROJECTS: {
    "Digital Library, VIPS-TC": {
      SLUG: "digital-library",
      LIVE_PREVIEW: "https://btech.library.vips.edu/",
      DESCRIPTION: [
        "Developed and launched a functional library website for a technical institution.",
        "Implemented user-friendly interface to improve accessibility of library resources.",
        "Designed responsive layout ensuring compatibility across desktop and mobile devices",
      ],
      TECH_STACK: ["React.js", "Tailwind CSS", "Firebase"],
      IMAGE: LibraryImage,
    },
    "ToDo Extension with Chrome Storage API": {
      SLUG: "todo-extension",
      LIVE_PREVIEW: "https://todo-extension-webapp.vercel.app/",
      GITHUB: "https://github.com/Utkarsh-Singhal-26/todo-extension",
      DESCRIPTION: [
        "Developed and launched a Chrome extension for task management using Chrome Storage API.",
        "Implemented user-friendly interface to enhance productivity and task tracking.",
        "Designed responsive layout ensuring seamless experience across different screen sizes and browsers.",
        "Integrated message broadcasting for real-time updates and synchronization",
      ],
      NOTE: "Note: The extension is not published on the Chrome Web Store.",
      TECH_STACK: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Borwser Extension",
        "Chrome Storage API",
        "Message Broadcasting",
      ],
      IMAGE: TodoImage,
    },
    "Notes Markdown App": {
      SLUG: "notes-markdown-app",
      GITHUB: "https://github.com/Utkarsh-Singhal-26/notes-desktop-app",
      DESCRIPTION: [
        "Developed a cross-platform desktop application for managing notes with markdown support",
        "Implemented live markdown preview and local file-based storage for persistence",
        "Enhanced user experience with a responsive and intuitive interface",
      ],
      NOTE: "Note: This app is not published on any platform.",
      TECH_STACK: ["Electron.js", "React.js", "Tailwind CSS", "Markdown"],
      IMAGE: NotesImage,
    },
  },

  ALL_PROJECTS:
    "https://github.com/stars/Utkarsh-Singhal-26/lists/projects-man-technologist",

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Astro",
      "Express.js",
      "React Native",
      "Expo",
      "Electron",
    ],
    Libraries: [
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "ShadCN",
      "Material UI",
      "Ant Design",
    ],
    "Database & Backend": [
      "MongoDB",
      "Firebase",
      "Redis",
      "Contentful",
      "GraphQL",
    ],
    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
    ],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
};

export function getProjectData(title: string) {
  return Object.entries(DATA.PROJECTS).find(
    ([, value]) => value.SLUG === title
  ) as [string, IProjectData] | undefined;
}
