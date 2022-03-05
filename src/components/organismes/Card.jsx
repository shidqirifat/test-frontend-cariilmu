import React from "react";
import { ImageCardClass, ImageCardInstructor } from "../atoms/Image";
import { TextCardClass, TextCardInstructor } from "../moleculs/TextCard";

export function ClassCard({ category, method, level, title }) {
  return (
    <div className="bg-white p-6 rounded-md shadow-md relative overflow-hidden">
      <ImageCardClass alt={title} />
      <TextCardClass
        category={category}
        method={method}
        level={level}
        title={title}
      />
    </div>
  );
}

export function InstructorCard({ social, avatar, name }) {
  return (
    <div className="bg-white p-6 mt-20 rounded-md relative shadow-md">
      <ImageCardInstructor alt={name} src={avatar} />
      <TextCardInstructor name={name} social={social} />
    </div>
  );
}
