import React from "react";
import { LuMusic } from "react-icons/lu";
import { RiEmotionSadLine } from "react-icons/ri";
import { MdOutlineArrowBack } from "react-icons/md";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

interface ErrorsProps {
  errorName: string;
}

const Errors: React.FC<ErrorsProps> = ({ errorName }) => {
  let errorMessage: string;

  const navigate = useNavigate();

  switch (errorName) {
    case "TypeError":
      errorMessage = "Oops! It looks like something went wrong.";
      break;
    case "ReferenceError":
      errorMessage = "Problem while processing your request.";
      break;
    case "SyntaxError":
      errorMessage = "A problem on our end!";
      break;
    default:
      errorMessage = "An unexpected error occurred.";
      break;
  }

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center my-4 relative">
      <LuMusic className="text-7xl text-purple-100 motion-safe:animate-pulse absolute top-0 left-1/2" />
      <LuMusic className="text-7xl text-lime-100 motion-safe:animate-pulse absolute top-16 left-1/4 ml-10" />
      <LuMusic className="text-7xl text-stone-100 motion-safe:animate-pulse absolute top-16 right-1/4 mr-16" />
      <LuMusic className="text-7xl text-blue-100 motion-safe:animate-pulse absolute top-1/2 left-1/3" />
      <LuMusic className="text-7xl text-orange-100 motion-safe:animate-pulse absolute bottom-0 left-1/2 ml-10 mt-4" />
      <LuMusic className="text-7xl text-green-100 motion-safe:animate-pulse absolute top-1/2 right-1/4" />
      <div className="flex flex-col items-center justify-center gap-4 z-10">
        <RiEmotionSadLine className="text-7xl text-gray-400 motion-safe:animate-bounce" />
        <div className="flex flex-col items-center">
          <Typography className="text-gray-400 font-LatoBold">
            {errorMessage}
          </Typography>
          <Typography className="text-gray-400 font-LatoRegular">
            Please Try again later.
          </Typography>
          <div className="py-4">
            <Button
              size="sm"
              onClick={() => navigate(-1)}
              className="capitalize flex flex-row items-center gap-2 rounded-full"
            >
              <MdOutlineArrowBack className="text-lg" />
              <span className="font-LatoRegular">Go back</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errors;
