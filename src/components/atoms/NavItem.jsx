import React from "react";

export default function NavItem({ children, path }) {
  const url = window.location.pathname;
  return (
    <li
      className={`${
        url === path
          ? "font-bold text-yellow-400"
          : "text-slate-600 font-semibold"
      } list-none text-xl px-6 py-4 cursor-pointer hover:underline hover:underline-offset-4`}
    >
      {children}
    </li>
  );
}
