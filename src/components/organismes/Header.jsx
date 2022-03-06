import React from "react";
import { ImageLogo } from "../atoms/Image";
import logo from "../../images/logo.png";
import Nav from "../moleculs/Nav";

export default function Header() {
  return (
    <header className="z-20 bg-gradient-to-tr from-slate-50 to-slate-200 fixed w-full shadow-md">
      <div className="flex gap-2 items-center max-w-6xl mx-auto">
        <ImageLogo src={logo} alt="Cariilmu" height={80} width={80} />
        <Nav />
      </div>
    </header>
  );
}
