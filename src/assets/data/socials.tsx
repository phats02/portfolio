import { ReactNode } from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/Utkarsh-Singhal-26",
    icon: <FaGithubSquare size={28} />,
  },
  {
    id: "linkedin",
    name: "Linkedin",
    url: "https://linkedin.com/in/singhalutkarsh26",
    icon: <FaLinkedin size={28} />,
  },
  {
    id: "whatsapp",
    name: "Whatsapp",
    url: "https://wa.me/+917303478907",
    icon: <FaWhatsapp size={28} />,
  },
];

export default socials;
