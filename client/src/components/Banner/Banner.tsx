import React from "react";
import SampleImage from "../../../public/vite.svg";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-200 to-yellow-100 font-LatoBold p-16 md:p-32 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 md:justify-between">
      <div className="items-center">
        <h2 className="text-slate-900 text-3xl md:text-6xl font-semibold mb-2">
          Bongo Music Awards 2023
        </h2>
        <h1 className="text-slate-900 text-6xl md:text-8xl font-bold capitalize">Ona Unyamwezi!</h1>
      </div>
      <div>
        <img src={SampleImage} alt="event artwork" className="text-red-600 w-96" />
      </div>
    </div>
  );
};

export default Banner;
