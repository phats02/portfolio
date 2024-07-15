"use client";
import socials from "@/assets/data/socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-16 flex flex-col items-center space-y-4 px-8 text-center">
      <div className="flex space-x-4">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            aria-label={social.name}
            className="rounded-xl flex items-center justify-center shadow-md border-[1px] border-tertiary bg-secondary/30 cursor-pointer h-14 w-14 transition duration-200 hover:border-accent"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p>
        Made by{" "}
        <a
          href="https://github.com/Utkarsh-Singhal-26"
          className="gradient-underline inline-block relative"
        >
          <span className="bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent">
            Utkarsh Singhal
          </span>
        </a>
      </p>

      <style jsx global>{`
        .gradient-underline {
          text-decoration: none;
        }
        .gradient-underline span {
          position: relative;
        }
        .gradient-underline span::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-image: linear-gradient(to right, #be185d, #1d4ed8);
          background-repeat: no-repeat;
          background-position: bottom left;
          background-size: 0% 2px;
          transition: background-size 150ms ease-in-out;
        }
        .gradient-underline:hover span::after {
          background-size: 100% 2px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
