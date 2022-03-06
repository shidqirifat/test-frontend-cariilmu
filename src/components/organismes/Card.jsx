import React from "react";
import { Link } from "react-router-dom";
import { ImageCardClass, ImageCardInstructor } from "../atoms/Image";
import { TextCardClass, TextCardInstructor } from "../moleculs/TextCard";

export function ClassCard({ category, method, level, title, id }) {
  return (
    <Link
      to={`/classes/${id}`}
      className="bg-white hover:bg-slate-100 transition p-6 rounded-md shadow-md hover:shadow-lg relative overflow-hidden"
    >
      <ImageCardClass alt={title} />
      <TextCardClass
        category={category}
        method={method}
        level={level}
        title={title}
      />
    </Link>
  );
}

export function InstructorCard({ social, avatar, name, id }) {
  return (
    <div className="bg-white hover:bg-slate-100 transition p-6 mt-20 rounded-md relative shadow-md hover:shadow-lg">
      <ImageCardInstructor alt={name} src={avatar} />
      <TextCardInstructor name={name} social={social} id={id} />
    </div>
  );
}
