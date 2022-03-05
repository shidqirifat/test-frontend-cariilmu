/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { EmptyCardIntructor } from "../components/moleculs/EmptyCard";
import { InstructorCard } from "../components/organismes/Card";

export default function CardInstructor() {
  const [listInstructor, setListInstructor] = useState([]);
  const url = window.location.pathname;

  useEffect(() => {
    getClassAPI();
  }, []);

  async function getClassAPI() {
    const response = await fetch(
      "https://api.cariilmu.co.id/api/v1/public/instructor?page=1&limit=10"
    );
    const instructorData = await response.json();
    const allInstructor = instructorData.data.records;

    if (isPageHome()) return limitInstructor(allInstructor);

    setListInstructor(allInstructor);
  }

  function limitInstructor(data) {
    const limit = data.slice(0, 4);
    setListInstructor(limit);
  }

  function isPageHome() {
    if (url === "/") return true;
    return false;
  }

  const CardsElement = listInstructor.map((instructor) => (
    <InstructorCard
      social={instructor?.social_media}
      name={instructor?.name}
      avatar={instructor?.avatar}
      key={instructor?.id}
    />
  ));

  return (
    <div>
      <h2 className="font-semibold text-2xl text-slate-800 py-6">
        List Instructor
      </h2>
      <div className="grid grid-card gap-8">
        {CardsElement}
        <EmptyCardIntructor />
      </div>
    </div>
  );
}
