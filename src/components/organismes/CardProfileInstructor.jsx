import React from "react";
import { ImageDetailInstructor } from "../atoms/Image";
import {
  DescriptionInstructor,
  ProfileInstructor,
} from "../moleculs/ProfileInstructor";

export default function CardProfileInstructor({
  src,
  alt,
  name,
  email,
  instagram,
  linkedin,
  description,
}) {
  return (
    <>
      <div className="px-4 py-8 mt-12 text-center h-max bg-slate-300 rounded-xl flex flex-col items-center">
        <ImageDetailInstructor src={src} alt={alt} />
        <ProfileInstructor
          name={name}
          email={email}
          instagram={instagram}
          linkedin={linkedin}
        />
      </div>
      <div className="md:mt-4">
        <DescriptionInstructor description={description} />
      </div>
    </>
  );
}
