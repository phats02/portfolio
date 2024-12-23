interface ExperienceInterface {
  id: number;
  title: string;
  company: string;
  time: string;
  link?: string;
}

export const experience: ExperienceInterface[] = [
  {
    id: 1,
    title: "Product Engineer Intern",
    company: "Requestly",
    time: "08 / 2024 - 10 / 2024",
    link: "https://drive.google.com/file/d/1JeUZfv-qlOtG9BsXv9rl06097KH-Ihvm/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Full Stack Intern",
    company: "Website Development and Maintenance Cell, VIPS-TC",
    time: "02 / 2024 - 07 / 2024",
  },
];
