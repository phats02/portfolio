import { experience } from "@/assets/data/experience";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const Experience = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-3xl font-bold font-josefin">Experience</h2>
      <div className="flex flex-col gap-4">
        {experience.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4 transition duration-200 hover:border-accent md:hover:scale-[1.01]"
          >
            <Link
              href={item.link ? item.link : "/"}
              target={item.link ? "_blank" : "_self"}
              rel={item.link ? "noopener noreferrer" : ""}
              className="grid grid-cols-3"
            >
              <div className="col-span-2 flex flex-col">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-md text-gray-300 italic">{item.company}</p>
              </div>
              <p className="text-md text-gray-300 text-right">{item.time}</p>
            </Link>
            {item.link && (
              <a
                className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
