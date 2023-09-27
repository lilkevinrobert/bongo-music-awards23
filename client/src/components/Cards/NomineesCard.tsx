import { Card } from "flowbite-react";
import React from "react";
import workArt from "../../../public/music-poster.jpg";

const NomineesCard = () => {
  return (
    <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={ workArt }
    className="items-center"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p className="capitalize">
        naringa
      </p>
    </h5>
  </Card>
  );
};

export default NomineesCard;
