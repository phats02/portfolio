"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BreadcrumbItem from "./breadcrumbitem";

const Breadcrumb = (): JSX.Element => {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { href: string; label: string; isCurrent: boolean }[]
  >([]);

  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/").filter((x) => x);
    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });
    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  return (
    <ol aria-label="breadcrumb" className="flex space-x-2">
      <BreadcrumbItem href="/" isRoot>
        ~
      </BreadcrumbItem>
      {breadcrumbs.map(({ href, label, isCurrent }) => (
        <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
          {label}
        </BreadcrumbItem>
      ))}
    </ol>
  );
};

export default Breadcrumb;
