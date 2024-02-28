import React from "react";
import { Typography } from "@material-tailwind/react";
import TrashAnimatedIcon from "/trash.gif";

const AnimatedDelete: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={TrashAnimatedIcon}
        alt="Loading..."
        className="w-12 h-12 animate-bounce"
      />
      <Typography className="text-lg text-gray-800 capitalize font-LatoBold">
        deleting...
      </Typography>
    </div>
  );
};

export default AnimatedDelete;
