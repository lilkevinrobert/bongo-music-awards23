import { FaCompactDisc } from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";

const ArtistSalutations = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-full bg-transparent">
      <div className="absolute z-20 flex flex-col items-center justify-center">
        <Typography className="font-LatoBold text-xl text-gray-900">
          Hello, VFX Artist
        </Typography>
        <Typography className="font-LatoRegular text-xl text-gray-900">
          Welcome, to your Bongo Music Awards Dashboard
        </Typography>
      </div>
      <Typography className="hidden absolute capitalize text-8xl text-amber-50 font-LatoBold opacity-50 top-0 left-0 z-10">
        bongo music awards
      </Typography>
      <FaCompactDisc className="absolute text-9xl hidden text-gray-900 top-0 left-0 z-10 animate-none" />
      <FaCompactDisc className="absolute text-9xl hidden text-amber-100 bottom-0 left-10 z-10 animate-none" />
      <FaCompactDisc className="absolute text-9xl hidden text-amber-100 top-0 right-0 z-10 animate-none" />
      <FaCompactDisc className="absolute text-9xl hidden text-gray-900 bottom-0 right-10 z-10 animate-none" />
    </div>
  );
};

export default ArtistSalutations;