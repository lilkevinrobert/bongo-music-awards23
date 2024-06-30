import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";

interface AwardsCardContent {
  content: {
    date: string;
    time: string;
    title: string;
    location: string;
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
        <div>
          <p className="text-sm text-gray-400 font-LatoRegular py-2">
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
        <Button
          variant="outlined"
          fullWidth
          className="capitalize rounded-xl border-gray-500 hover:text-white hover:bg-gray-700 transition ease-linear"
        >
          view
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AwardsCard;
