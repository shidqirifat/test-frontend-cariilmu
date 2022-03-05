import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({ children, path }) {
  const router = useLocation();
  return (
    <li
      className={`${
        router.pathname === path
          ? "font-bold text-yellow-400"
          : "text-slate-600 font-semibold"
      } list-none text-xl px-6 py-4 cursor-pointer hover:underline hover:underline-offset-4`}
    >
      <Link to={path}>{children}</Link>
    </li>
  );
}
