import { StaticImageData } from "next/image";

import {
  LibraryImage, VIPSImage
} from "@/assets";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "TRAN QUANG PHAT",
    AGE: "2002",
    PRONOUN: "he/him",
    HEADLINE:
      "Enthusiastic about creating high-performance, scalable web applications with user-friendly experiences.",
    // RESUME:
    //   "https://drive.google.com/file/d/1piWpArbdbjt4PKF4gZlR0nkD09au_8fE/view",
    EMAIL: "mailto:work.phattran.2002@gmail.com",
    GITHUB: "https://github.com/phats02",
    LINKEDIN: "https://www.linkedin.com/in/tq-phat",
  },
  ABOUT_ME: {
    INTRO:
      "As a passionate full-stack developer, I thrive on designing and developing efficient, scalable, and intuitive end-to-end applications that deliver seamless user experiences.",
    EXPERTISE:
      "With expertise in React.js, Next.js, Node.js, TypeScript, and Cloud technologies, I confidently build and optimize applications while solving complex problems. Committed to staying updated with the latest industry trends, my goal is to continuously enhance my skills and become a highly proficient full-stack web developer.",
  },
  EDUCATION: {
    "University of Science": {
      WEBSITE: "https://en.hcmus.edu.vn/overview/",
      DEGREE: "Degree of Bachelor in Information Technology",
      LOCATION: "Ho Chi Minh City, Viet Nam",
      DURATION: "2020 - 2024",
      GPA: "3.41/4.00",
    }
  },
  EXPERIENCE: {
    "DevSamurai Vietnam": {
      WEBSITE: "https://devsamurai.com",
      POSITION: "Software Engineer",
      LOCATION: "Ho Chi Minh City, Viet Nam",
      DURATION: "Apr, 2023 - Present",
      DESCRIPTION: [
        "Create plugins for Atlassian’s Jira software that facilitate collaborative work on Agile tasks.",
        "Utilize a NodeJS-based toolkit to develop APIs for Atlassian Connect Add-ons",
        "Handle real-time through SocketIO for a large group of people simultaneously (over 1000 individuals).",
        "Use ReactJS to implement the UI/UX for the plugins.",
      ],
      TECH_STACK: [
        "React.js",
        "Express.js",
        "Node.js",
        "TypeScript",
        "Redux toolkit",
        "Redis",
        "PostgreSQL",
        "SlackAPI",
        "SocketIO",
        "Google App Engine",
        "Google Cloud Bucket",
        "Google Cloud Task",
        "Google Cloud Schedule",
      ],
    },
  },

  PROJECTS: {
    "Company Project: AGILEBOX For Jira": {
      //TODO: Add duration
      LIVE_PREVIEW: "https://marketplace.atlassian.com/apps/1224759/agile-planning-poker-retrospectives-daily-standup-for-jira",
      DESCRIPTION: [
        "Developed a Slack Bot integrated, leveraging Slack OAuth, Jira OAuth, Google Cloud Task, and Google Cloud Scheduler for reminder task scheduling. The bot streamlines workflows with automated reminders for Planning Poker games, Retrospective meetings, and daily standup updates, enabling seamless reporting directly in Slack. With one-click access to meetings and active sessions, it enhances team productivity and collaboration",
        "Led the implementation of Internationalization Support, adding four new languages (French, German, Chinese, Japanese), enhancing global usability and accessibility.",
        "Implemented a feature allowing users to upload images and utilized Google Cloud Bucket for image storage and management.",
        "Initialized and applied Redis for socket cache data management.",
        "Initiated and set up Redis Pub/Sub mechanism as a middle adapter between GCP server socket backend instances, supporting horizontal scaling."
      ],
      TECH_STACK: [
        "React.js",
        "Express.js",
        "Node.js",
        "TypeScript",
        "Redux toolkit",
        "Redis",
        "PostgreSQL",
        "SlackAPI",
        "SocketIO",
        "Google App Engine",
        "Google Cloud Bucket",
        "Google Cloud Task",
        "Google Cloud Schedule",
      ],
      IMAGE: VIPSImage,
      HIDDEN: false,
    },
    "Team Project: CodeForKids": {
      // LIVE_PREVIEW: "https://btech.library.vips.edu/",
      DESCRIPTION: [
        "This project is a beginner-focused coding education platform with an intuitive interface and social login integration for effortless user access. It provides concise lessons, interactive coding exercises, and practical projects, enriched with gamified features and progress tracking to create an engaging learning environment. Extensive testing ensures the platform's reliability and performance, offering a dynamic and accessible experience",
        "Built with Next.js, the front-end delivers a responsive and dynamic user interface optimized for seamless interaction. Social login integration via Firebase ensures secure and streamlined authentication. Server-side rendering enhances performance and supports strong SEO, making the platform both fast and discoverable.",
        "The backend, developed using NestJS, incorporates CQRS and Event Sourcing within a Domain-Driven Design framework to handle intricate business logic effectively. This structure promotes scalability and maintainability. Jest was used for thorough unit and integration testing, ensuring consistent reliability and robust performance.",
        "PostgreSQL powers the platform’s data management, providing scalability and efficiency. A carefully crafted relational database schema supports user data, lesson progress, and content management. Optimized queries and schema design maintain data integrity and deliver high performance."
      ],
      TECH_STACK: ["CQRS", "Event Sourcing", "Domain-Driven Design", "Next.js", "Firebase", "NestJS", "PostgreSQL", "Jest"],
      IMAGE: LibraryImage,
      HIDDEN: false,
    },
    "Personal Project: GradeHub Web service": {
      LIVE_PREVIEW: "https://www.youtube.com/watch?v=9iBB_KpHF8I",
      DESCRIPTION: [
        "Developed a web application for managing classes, grades, and user roles with real-time notifications and multi-role authentication.",
        "The front-end was developed using React to create a dynamic and responsive user interface, prioritizing seamless user interaction. The UI/UX design emphasized accessibility and an intuitive experience for all users. Social login functionalities for Google and Facebook were integrated, alongside role-based access controls to ensure secure and tailored user experiences.",
        "The backend features robust class and grade management systems, enabling efficient bulk uploads and exports through CSV/Excel formats. APIs were crafted using Express.js to facilitate smooth communication between the front-end and backend. Authentication and authorization were implemented with popular libraries, supporting email verification, password reset, and role-based permissions, while Socket.IO was utilized for real-time notifications and communication.",
        "MongoDB was employed to efficiently manage class, user, and grade data, ensuring scalability and performance. The database supports streamlined import and export functionalities for student and grade data via CSV/Excel formats, enabling easy data handling and integration."
      ],
      TECH_STACK: [
        "React.js",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Firebase",
      ],
    },
  },
  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Python", "Java"],
    Frameworks: [
      "React.js",
      "Next.js",
      "Express.js",
      "Redux toolkit",
      "Jest",
      "Tailwind CSS",
      "VueJS",
      "Webpack",
      "Spring",
      "FastAPI"
    ],
    Libraries: [
      "MUI",
      "Ant Design",
      "SocketIO",
      "Slack BoltJS",
      "RTK Query",
      "JQuery",
    ],
    "DevOps": [
      "Google App Engine",
      "Google Cloud Bucket",
      "Google Cloud Task",
      "Google Cloud Schedule",
      "Amazon Web Services"
    ],
    "Tools & Platforms": [
      "Git",
      "Jira",
      "GitHub",
      "Postman",
      "Docker",
      "Firebase",
      "Prettier",
    ],
  },
};
