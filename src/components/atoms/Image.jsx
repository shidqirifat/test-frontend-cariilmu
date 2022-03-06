import React from "react";
import Image from "../../images/logo.png";

export function ImageLogo({ src, alt, height, width }) {
  return (
    <div
      style={{ height: `${height}px`, width: `${width}px` }}
      className="overflow-hidden p-4"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-md object-cover"
      />
    </div>
  );
}

export function ImageCardClass({ alt }) {
  return (
    <div className="w-full h-52 absolute top-0 left-0">
      <img src={Image} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export function ImageCardInstructor({ src, alt }) {
  return (
    <div className="w-36 h-36 rounded-full shadow-lg absolute -top-16 left-1/2 -translate-x-1/2 overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function ImageDetailClass({ src, alt }) {
  return (
    <div className="max-h-80 z-10 pt-8">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
