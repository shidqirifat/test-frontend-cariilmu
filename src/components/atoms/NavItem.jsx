import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({ children, path }) {
  const router = useLocation().pathname;
  const url = router.split("/")[1];

  return (
    <Link
      to={path}
      className={`${
        url === path
          ? "font-bold text-yellow-400"
          : "text-slate-600 font-semibold"
      } list-none text-xl px-6 py-4 cursor-pointer hover:underline hover:underline-offset-4`}
    >
      {children}
    </Link>
  );
}
