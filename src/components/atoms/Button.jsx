import React from "react";
import { Link } from "react-router-dom";

export function ButtonPrimary({ children }) {
  return (
    <Link
      to="/classes"
      className="px-6 py-3 uppercase rounded-md shadow-md font-bold text-lg text-yellow-500 bg-slate-50 hover:bg-slate-100 hover:shadow-lg w-max mx-auto transition"
    >
      {children}
    </Link>
  );
}

export function ButtonExpand({ handleFunction, expand }) {
  return (
    <button
      onClick={handleFunction}
      className="py-2 w-full mt-2 rounded-md shadow-md font-semibold bg-white text-slate-700 border border-slate-800"
    >
      {expand ? "See all item" : "Show less item"}
    </button>
  );
}
