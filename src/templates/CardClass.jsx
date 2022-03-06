/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EmptyCard from "../components/moleculs/EmptyCard";
import { ClassCard } from "../components/organismes/Card";

export default function CardClass() {
  const [listClass, setListClass] = useState([]);
  const url = useLocation().pathname;

  useEffect(() => {
    getClassAPI();
  }, []);

  async function getClassAPI() {
    const response = await fetch(
      "https://api.cariilmu.co.id/api/v1/public/course?page=1&limit=10"
    );
    const classData = await response.json();
    const allClass = classData.data.records;

    if (isPageHome()) return limitClass(allClass);

    setListClass(allClass);
  }

  function limitClass(data) {
    const limit = data.slice(0, 4);
    setListClass(limit);
  }

  function isPageHome() {
    if (url === "/") return true;
    return false;
  }

  const CardsElement = listClass.map((classItem) => (
    <ClassCard
      title={classItem?.name}
      category={classItem?.course_category?.name}
      method={classItem?.course_teach_method?.name}
      level={classItem?.course_level?.name}
      id={classItem?.id}
      key={classItem?.id}
    />
  ));

  return (
    <div className="px-4">
      <h2 className="font-semibold text-2xl text-slate-800 py-6">List Class</h2>
      <div className="grid grid-card gap-8">
        {CardsElement}
        {isPageHome() && <EmptyCard size="full" type="class" />}
      </div>
      {isPageHome() && <EmptyCard type="class" />}
    </div>
  );
}
