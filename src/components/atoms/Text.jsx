import React from "react";
import { ReactComponent as InstagramLogo } from "../../icons/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../../icons/linkedin.svg";
import { Link } from "react-router-dom";

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
    <h2 className="text-xl font-semibold text-center text-slate-700 hover:underline hover:underline-offset-4 transition">
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

export function NameDetailClass({ children }) {
  return <h2 className="text-3xl text-slate-800 font-semibold">{children}</h2>;
}

export function SubTitleDetailClass({ children }) {
  return (
    <h2 className="text-lg text-yellow-500 font-bold mt-8 mb-2">{children}</h2>
  );
}

export function ContentDetailClass({ children, type, mark, section }) {
  if (type === "list") {
    return (
      <li
        className={`${
          section === "goals" ? "p-2 bg-slate-300 rounded-md" : ""
        }`}
      >
        {mark} {children}
      </li>
    );
  }
  if (type === "html") {
    return <h2 dangerouslySetInnerHTML={{ __html: children }} />;
  } else return <h2>{children}</h2>;
}

export function PriceDetailClass({ children }) {
  return <h2 className="text-xl text-slate-600 font-bold">{children}</h2>;
}

export function ExtraInfoDetailClass({ children }) {
  return <h2 className="text-slate-700 text-lg">{children}</h2>;
}

export function InstructorDetailClass({ children, link, name }) {
  return (
    <h2 className="text-lg text-slate-700">
      {children}{" "}
      <Link
        to={link}
        className="text-sky-500 hover:text-sky-600 hover:underline hover:underline-offset-4"
      >
        {name}
      </Link>
    </h2>
  );
}
