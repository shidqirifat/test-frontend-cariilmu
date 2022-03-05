import React from "react";
import NavItem from "../atoms/NavItem";

export default function Nav() {
  return (
    <ul className="flex">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/classes">Class</NavItem>
      <NavItem path="/instructors">Instructor</NavItem>
    </ul>
  );
}
