"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
  const Links = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];

  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="flex space-x-5 border-b-2 mb-4 border-green-400 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-5">
        {Links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classnames({
                "text-slate-950": pathName === link.href,
                "text-slate-500": pathName !== link.href,
                "hover:text-slate-800": true,
              })}
              // className={`${
              //   pathName === link.href ? "text-zinc-900" : "text-zinc-500"
              // } hover:text-zinc-700`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
