import React from "react";
import {
  CategoryLevelCard,
  MethodCardClass,
  SocialCardInstructor,
  TitleCardClass,
  TitleCardInstructor,
} from "../atoms/Text";

export function TextCardClass({ category, level, method, title }) {
  return (
    <div className="pt-52">
      <CategoryLevelCard category={category} level={level} />
      <MethodCardClass>{method}</MethodCardClass>
      <TitleCardClass>{title}</TitleCardClass>
    </div>
  );
}

export function TextCardInstructor({ name, social }) {
  const SocialElement = social.map((socialItem, index) => (
    <SocialCardInstructor
      link={socialItem.url}
      type={socialItem.type}
      key={index}
    />
  ));

  return (
    <div className="pt-24">
      <TitleCardInstructor>{name}</TitleCardInstructor>
      <div className="mt-4 flex gap-4 pb-6 justify-center items-center">
        {SocialElement}
      </div>
    </div>
  );
}
