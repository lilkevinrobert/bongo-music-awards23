import { Button, Typography } from "@material-tailwind/react";
import { MdOutlineArrowBack } from "react-icons/md";
import { TbReload } from "react-icons/tb";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center z-20">
        <Typography className="text-gray-900 text-9xl font-LatoBold">
          {error.status}
        </Typography>
        <div className="flex flex-col items-center">
          <Typography className="text-gray-800 text-xl text-center uppercase font-LatoBold">
            you didn't breakdown anything.
          </Typography>
          <Typography className="text-gray-800 text-xl text-center uppercase font-LatoBold">
            {error.error.message}.
          </Typography>
          <div className="py-4 flex flex-row-reverse items-center gap-2">
            <Button
              size="sm"
              onClick={() => window.location.reload()}
              className="capitalize flex flex-row items-center gap-2 rounded-full"
            >
              <TbReload className="text-lg" />
              <span className="font-LatoRegular capitalize">reload</span>
            </Button>
            <span className="text-gray-900 font-LatoRegular">or</span>
            <Button
              size="sm"
              onClick={() => navigate(-1)}
              className="capitalize flex flex-row items-center gap-2 rounded-full border-2 border-gray-900 bg-transparent text-gray-900"
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

export default ErrorHandler;
