import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface AwardsCardContent {
  content: {
    id: string;
    date: string;
    time: string;
    title: string;
    location: string;
    isActive: boolean;
  };
}

const AwardsCard = ({ content }: AwardsCardContent) => {
  return (
    <Card className="shadow-lg rounded-lg">
      <CardBody className="flex flex-col gap-2 py-0 px-4">
        <img
          src="#"
          alt="award_poster"
          className="hidden text-sm font-LatoRegular"
        />
          <div className="capitalize flex items-center gap-2 text-sm font-LatoRegular pt-4">
        {content.isActive ? (
            <><div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div><span className="text-green-400 animate-pulse">active</span></>
          ) : (
            <span className="text-gray-400">closed</span>
          )}
          </div>
        <div>
          <p className="text-sm text-gray-500 font-LatoRegular py-2">
            {content.date} | {content.time}
          </p>
          <Typography variant="h6" className="font-LatoBold">
            {content.title}
          </Typography>
          <p className="text-sm text-gray-400 font-LatoRegular flex items-center gap-2 py-2">
            <FaLocationDot />
            {content.location}
          </p>
        </div>
      </CardBody>
      <CardFooter className="bg-transparent p-4">
        <NavLink to={`../awards/${content.id}`}>
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            className="capitalize rounded-full border-gray-500 hover:text-white hover:bg-gray-700 transition ease-linear"
          >
            view
          </Button>
        </NavLink>
      </CardFooter>
    </Card>
  );
};

export default AwardsCard;
