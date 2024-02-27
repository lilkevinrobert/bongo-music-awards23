import { Typography } from "@material-tailwind/react";
import { RiMusic2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa6";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 bg-gray-800">
        <FaSpinner className="motion-safe:animate-spin text-yellow-100 text-3xl" />
      <div className="rounded-md p-4 max-w-sm w-full mx-auto flex flex-row items-center justify-center gap-4">
        <Typography className="uppercase text-3xl text-yellow-100 font-bold">
          bongo music awards
        </Typography>
        <div className="block">
          <RiMusic2Fill className="text-4xl text-yellow-100" />
          <FaAward className="text-4xl text-yellow-100" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
