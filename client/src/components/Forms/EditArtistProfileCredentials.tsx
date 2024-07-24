import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TiWarning } from "react-icons/ti"

const EditArtistProfileCredentials = () => {
  const navigation = useNavigate();
  return (
    <form className="w-full space-y-2">
        <Typography className="text-lg text-gray-900 font-LatoBold mb-4 capitalize">
          Password & security
        </Typography>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-sm font-LatoBold text-gray-900"
        >
          Current Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your current Password here"
          className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-white"
        />
      </div>
      <div className=" w-full">
        <label
          htmlFor="password"
          className="block text-sm font-LatoBold text-gray-900"
        >
          New Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your new Password here"
          className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-white"
        />
      </div>
      <Typography className="text-red-600 text-base font-LatoRegular mt-2 flex items-center gap-2">
        <TiWarning className="text-2xl" /> Changes made here are permanent.
      </Typography>

      <div className="flex items-center justify-end gap-2 my-4">

      <Button size="sm" onClick={() => navigation(-1)} className="rounded-full capitalize font-LatoBold bg-transparent border border-gray-900 hover:bg-amber-300 transition ease-linear text-gray-900 hover:text-gray-900 hover:scale-110">go back</Button>
      <Button
        size="sm"
        className="my-2 float-right rounded-full capitalize font-LatoBold bg-red-600 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900 hover:scale-110"
      >
        save changes
      </Button>
      </div>
    </form>
  );
};

export default EditArtistProfileCredentials;
