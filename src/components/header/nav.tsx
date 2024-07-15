"use client";
import cx from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

const Nav = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <ul className="flex list-none space-x-2">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={cx(
              "rounded-lg px-3 py-1 text-base text-gray-500 transition duration-200 cursor-pointer hover:bg-gray-600 hover:bg-opacity-30 inline-block",
              pathname.split("/")[1] === item.href.replace("/", "") &&
                "bg-gray-600 bg-opacity-30 font-medium !text-accent hover:bg-opacity-40"
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
