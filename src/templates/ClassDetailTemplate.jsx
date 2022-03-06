/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DetailClass, DetailHero } from "../components/organismes/DetailClass";

export default function ClassDetailTemplate() {
  const [detailClass, setDetailClass] = useState();
  const url = useLocation().pathname;
  const instructorId = url.split("/")[2];

  useEffect(() => {
    getClassAPI();
  }, []);

  async function getClassAPI() {
    const response = await fetch(
      `https://api.cariilmu.co.id/api/v1/public/course/${instructorId}`
    );
    const classData = await response.json();
    const allClass = await classData.data;
    setDetailClass(allClass);
  }

  return (
    <div className="pt-20 pb-20 max-w-6xl mx-auto px-4">
      {detailClass && (
        <>
          <DetailHero
            src={detailClass?.cover}
            alt={detailClass?.name}
            className={detailClass?.name}
            price={detailClass?.price}
            instructorName={
              detailClass?.instructors && detailClass?.instructors[0]?.name
            }
            instructorId={
              detailClass?.instructors && detailClass?.instructors[0]?.id
            }
            duration={detailClass?.duration}
            category={detailClass?.course_category?.name}
            level={detailClass?.course_level?.name}
            method={detailClass?.course_teach_method?.name}
          />
          <DetailClass
            target={detailClass?.target_group}
            goals={detailClass?.training_goals && detailClass?.training_goals}
            materials={
              detailClass?.training_materials && detailClass?.training_materials
            }
            description={detailClass?.description}
          />
        </>
      )}
    </div>
  );
}
