import React from "react";
import { ReactComponent as InstagramLogo } from "../../icons/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../../icons/linkedin.svg";

export function TitleHero({ children }) {
  return (
    <h2 className="font-bold text-3xl text-white mx-10 text-center mb-10 leading-10">
      {children}
    </h2>
  );
}

export function CategoryLevelCard({ category, level }) {
  return (
    <h3 className="text-slate-500 font-semibold -mt-2 text-lg mb-1">
      <span className="mr-2">{category}</span>/
      <span className="ml-2">{level}</span>
    </h3>
  );
}

export function MethodCardClass({ children }) {
  return (
    <h4 className="text-slate-500 font-semibold text-lg mb-4">{children}</h4>
  );
}

export function TitleCardClass({ children }) {
  return <h2 className="text-xl font-semibold text-slate-700">{children}</h2>;
}

export function TitleCardInstructor({ children }) {
  return (
    <h2 className="text-xl font-semibold text-center text-slate-700">
      {children}
    </h2>
  );
}

export function SocialCardInstructor({ link, type }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="h-8 w-8">
      {type === "INSTAGRAM" ? <InstagramLogo /> : <LinkedinLogo />}
    </a>
  );
}

export function TextEmptyCard({ children }) {
  return (
    <h2 className="text-slate-500 group-hover:text-slate-700 transition text-2xl font-semibold text-center">
      {children}
    </h2>
  );
}
