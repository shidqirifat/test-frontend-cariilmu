/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardProfileInstructor from "../components/organismes/CardProfileInstructor";

export default function InstructorDetailTemplate() {
  const [detailInstructor, setDetailInstructor] = useState();
  const url = useLocation().pathname;
  const instructorId = url.split("/")[2];

  useEffect(() => {
    getClassAPI();
  }, []);

  async function getClassAPI() {
    const response = await fetch(
      `https://api.cariilmu.co.id/api/v1/public/instructor/${instructorId}`
    );
    const classData = await response.json();
    const allClass = await classData.data;
    setDetailInstructor(allClass);
  }

  return (
    <div className="max-w-6xl mx-auto p-4 py-20 grid gap-8 grid-cols-1 md:grid-instructor">
      {detailInstructor && (
        <CardProfileInstructor
          src={detailInstructor.avatar}
          alt={detailInstructor.name}
          name={detailInstructor.name}
          email={detailInstructor.email}
          instagram={detailInstructor.social_media[0]}
          linkedin={detailInstructor.social_media[1]}
          description={detailInstructor.description}
        />
      )}
    </div>
  );
}
