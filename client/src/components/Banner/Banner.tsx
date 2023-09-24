import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-yellow-100 font-montserratMedium p-16 md:p-32 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 md:justify-between">
      <div className="items-center">
        <h2 className="text-slate-900 font-semibold">
          Bongo Music Awards 2023
        </h2>
        <h1 className="text-slate-900 text-6xl font-bold">Hii Imeenda!</h1>
      </div>
      <div>
        <img src="#" alt="event artwork" className="text-red-600" />
        <p className="text-red-600">some artwork</p>
      </div>
    </div>
  );
};

export default Banner;
