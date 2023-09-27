import React from "react";
import NomineesCard from "../Cards/NomineesCard";

const Nominees = () => {
  return (
    <div className="h-screen p-16 md:px-32 bg-slate-50 text-slate-50">
      <h2 className="font-LatoBold text-xl mb-8 text-slate-900">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-2">
      <NomineesCard />
      <NomineesCard />
      <NomineesCard />
      <NomineesCard />
      </div>
    </div>
  );
};

export default Nominees;
