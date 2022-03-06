import React from "react";
import {
  EmailProfileInstructor,
  SubTitleDetailClass,
  TitleCardInstructor,
} from "../atoms/Text";
import { SocialCardInstructor } from "../atoms/Text";
import { ContentDetailClass } from "../atoms/Text";

export function ProfileInstructor({ name, email, instagram, linkedin }) {
  return (
    <div className="py-4">
      <TitleCardInstructor link={false}>{name}</TitleCardInstructor>
      <EmailProfileInstructor>{email}</EmailProfileInstructor>
      <SocialInstructor instagram={instagram} linkedin={linkedin} />
    </div>
  );
}

export function DescriptionInstructor({ description }) {
  return (
    <>
      <SubTitleDetailClass>Deskripsi: </SubTitleDetailClass>
      <ContentDetailClass type="html">{description}</ContentDetailClass>
    </>
  );
}

export function SocialInstructor({ instagram, linkedin }) {
  return (
    <div className="flex gap-4 justify-center items-center">
      {instagram && (
        <SocialCardInstructor
          link={instagram?.url}
          type={instagram?.type}
          key={instagram?.id}
        />
      )}
      {linkedin && (
        <SocialCardInstructor
          link={linkedin?.url}
          type={linkedin?.type}
          key={linkedin?.id}
        />
      )}
    </div>
  );
}
