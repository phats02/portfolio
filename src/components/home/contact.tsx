"use client";
import Link from "next/link";

const Contact = (): JSX.Element => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-3xl font-bold font-josefin">Contact</h2>
        <p className="text-lg font-normal text-gray-100">
          You can send me over an e-mail on{" "}
          <Link
            href="mailto:singhalutkarsh26@gmail.com"
            className="text-blue-400 hover:!text-blue-300 gradient-underline inline-block relative"
          >
            <span>singhalutkarsh26@gmail.com</span>
          </Link>
        </p>
      </div>

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
    </>
  );
};

export default Contact;
