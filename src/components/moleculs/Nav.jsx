import React from "react";
import NavItem from "../atoms/NavItem";

export default function Nav() {
  return (
    <ul className="flex">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/class">Class</NavItem>
      <NavItem path="/instructor">Instructor</NavItem>
    </ul>
  );
}
