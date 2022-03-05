import React from "react";
import Hero from "../components/moleculs/Hero";
import CardClass from "../templates/CardClass";
import Gap from "../components/atoms/Gap";
import CardInstructor from "../templates/CardInstructor";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="px-10 py-10 mb-40 max-w-6xl mx-auto">
        <CardClass />
        <Gap height={40} />
        <CardInstructor />
      </div>
    </>
  );
}
