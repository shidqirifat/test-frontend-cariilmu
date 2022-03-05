import React from "react";
import { TextEmptyCard } from "../atoms/Text";

export function EmptyCardClass() {
  return (
    <a
      className="group h-full bg-white hover:bg-slate-100 rounded-md shadow-md transition grid items-center"
      href="/class"
    >
      <TextEmptyCard>See All Class</TextEmptyCard>
    </a>
  );
}

export function EmptyCardIntructor() {
  return (
    <a
      className="group h-full bg-white hover:bg-slate-100 rounded-md shadow-md transition grid items-center"
      href="/instructor"
    >
      <TextEmptyCard>See All Intructor</TextEmptyCard>
    </a>
  );
}
