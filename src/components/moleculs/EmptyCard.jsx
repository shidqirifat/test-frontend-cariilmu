import React from "react";
import { Link } from "react-router-dom";
import { TextEmptyCard } from "../atoms/Text";

export function EmptyCardClass() {
  return (
    <Link
      className="group h-full bg-white hover:bg-slate-100 rounded-md shadow-md transition grid items-center"
      to="/classes"
    >
      <TextEmptyCard>See All Class</TextEmptyCard>
    </Link>
  );
}

export function EmptyCardIntructor() {
  return (
    <Link
      className="group h-full bg-white hover:bg-slate-100 rounded-md shadow-md transition grid items-center"
      to="/instructors"
    >
      <TextEmptyCard>See All Intructor</TextEmptyCard>
    </Link>
  );
}
