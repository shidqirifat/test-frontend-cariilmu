import React from "react";
import { ImageDetailClass } from "../atoms/Image";
import { ContentDetail, ContentHero } from "../moleculs/TextDetailClass";
import MaterialsClass from "./MaterialsClass";

export function DetailHero({
  src,
  alt,
  className,
  price,
  instructorName,
  instructorId,
  duration,
  category,
  level,
  method,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 pb-10 relative before:bg-yellow-400 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-screen">
      <ImageDetailClass src={src} alt={alt} />
      <ContentHero
        className={className}
        price={price}
        instructorName={instructorName}
        instructorId={instructorId}
        duration={duration}
        category={category}
        level={level}
        method={method}
      />
    </div>
  );
}

export function DetailClass({ target, goals, materials, description }) {
  return (
    <div>
      <ContentDetail title="Target Pelatihan" detail={target} />
      <ContentDetail title="Goals Pelatihan" detail={goals} type="list" />
      <MaterialsClass title="Materi Pelatihan" materials={materials} />
      <ContentDetail
        title="Deskripsi Pelatihan"
        detail={description}
        type="html"
      />
    </div>
  );
}
