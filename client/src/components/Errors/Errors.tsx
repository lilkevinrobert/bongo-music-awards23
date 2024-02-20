import React from "react";
import { LuMusic } from "react-icons/lu";
import { RiEmotionSadLine } from "react-icons/ri";

interface ErrorsProps {
  errorName: string;
}

const Errors: React.FC<ErrorsProps> = ({ errorName }) => {
  let errorMessage: string;

  switch (errorName) {
    case "TypeError":
      errorMessage = "A type error occurred.";
      break;
    case "ReferenceError":
      errorMessage = "A reference error occurred.";
      break;
    case "SyntaxError":
      errorMessage = "An error on our end!";
      break;
    default:
      errorMessage = "An error occurred.";
      break;
  }

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center my-4 relative">
      <LuMusic className="text-7xl text-purple-100 motion-safe:animate-ping absolute top-0 left-1/2" />
      <LuMusic className="text-7xl text-lime-100 motion-safe:animate-ping absolute top-16 left-1/4 ml-10" />
      <LuMusic className="text-7xl text-stone-100 motion-safe:animate-ping absolute top-16 right-1/4 mr-16" />
      <LuMusic className="text-7xl text-blue-100 motion-safe:animate-ping absolute top-1/2 left-1/3" />
      <LuMusic className="text-7xl text-orange-100 motion-safe:animate-ping absolute bottom-0 left-1/2 ml-10 mt-4" />
      <LuMusic className="text-7xl text-green-100 motion-safe:animate-ping absolute top-1/2 right-1/4" />
      <div className="flex flex-col items-center justify-center gap-4 z-10">
        <RiEmotionSadLine className="text-7xl text-gray-400 motion-safe:animate-bounce" />
        <div className="flex flex-col items-center">
          <div className="text-gray-400 font-LatoBold">{errorMessage}</div>
          <div className="text-gray-400 font-LatoRegular">
            Please Try again later.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errors;
