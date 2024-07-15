import cx from "classnames";
import Link from "next/link";
import { Fragment, ReactNode } from "react";

const BreadcrumbItem = ({
  isRoot,
  children,
  href,
  isCurrent,
}: {
  isRoot?: boolean;
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
}): JSX.Element => (
  <Fragment>
    {!isRoot && (
      <span aria-hidden="true" className="opacity-50">
        /
      </span>
    )}
    <li>
      <Link
        href={href}
        className={cx(
          isCurrent
            ? "bg-gradient-to-br from-[#9ebd13] to-[#008552] bg-clip-text font-bold text-transparent"
            : "text-gray-300",
          "transition duration-200 hover:opacity-80"
        )}
        aria-current={isCurrent ? "page" : "false"}
      >
        {children}
      </Link>
    </li>
  </Fragment>
);

export default BreadcrumbItem;
