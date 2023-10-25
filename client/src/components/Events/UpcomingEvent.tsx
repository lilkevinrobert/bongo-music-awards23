import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const UpcomingEvent = () => {
  return (
    <>
      <Typography variant="h6" className="py-2 capitalize font-LatoBold">Upcoming Events</Typography>
      <Card className="w-full rounded-md shadow-none">
        <CardBody>
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 2</li>
          <li>Event 2</li>
          <li>Event 2</li>
          <li>Event 2</li>
          <li>Event 2</li>
        </CardBody>
      </Card>
    </>
  );
};

export default UpcomingEvent;
