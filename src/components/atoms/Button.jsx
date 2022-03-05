import React from "react";

export function ButtonPrimary({ children }) {
  return (
    <button className="px-6 py-3 uppercase rounded-md shadow-md font-bold text-lg text-yellow-500 bg-slate-50 hover:bg-slate-100 hover:shadow-lg w-max mx-auto transition">
      {children}
    </button>
  );
}
