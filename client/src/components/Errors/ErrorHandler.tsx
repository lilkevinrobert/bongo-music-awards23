import { Button, Typography } from "@material-tailwind/react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center z-20">
        <Typography className="text-gray-900 text-9xl font-LatoBold">
          {error.status}
        </Typography>
        <div className="flex flex-col items-center">
          <Typography className="text-gray-800 text-xl uppercase font-LatoBold">
            you didn't breakdown anything.
          </Typography>
          <Typography className="text-gray-800 text-xl uppercase font-LatoBold">
            {error.error.message}.
          </Typography>
          <div className="py-4">
            <Button
              size="sm"
              onClick={() => navigate(-1)}
              className="capitalize flex flex-row items-center gap-2 rounded-full"
            >
              <MdOutlineArrowBack className="text-lg" />
              <span className="font-LatoRegular">You can Go back</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 flex flex-row items-center justify-center gap-10">
      <span className="text-amber-50 font-LatoBold text-[15rem] animate-bounce">{error.status}</span>
      <span className="text-amber-50 font-LatoBold text-[15rem] animate-bounce">{error.status}</span>
      </div>
      <div className="absolute -rotate-180 flex flex-row items-center justify-center gap-10 mt-28">
      <span className="text-amber-50 font-LatoBold text-[15rem] animate-none">{error.status}</span>
      <span className="text-amber-50 font-LatoBold text-[15rem] animate-none">{error.status}</span>
      </div>
    </div>
  );
};

export default ErrorHandler;
