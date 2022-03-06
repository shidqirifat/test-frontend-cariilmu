import React from "react";
import { Link } from "react-router-dom";
import { TextEmptyCard } from "../atoms/Text";

export default function EmptyCard({ size, type }) {
  return (
    <Link
      className={`group ${
        size === "full"
          ? "hidden laptop:grid laptop:h-full"
          : "mt-4 py-4 laptop:hidden grid"
      } bg-slate-100 hover:bg-slate-200 rounded-md shadow-md hover:shadow-lg transition items-center`}
      to="/instructors"
    >
      <TextEmptyCard>
        See All {type === "class" ? "Class" : "Intructor"}
      </TextEmptyCard>
    </Link>
  );
}
