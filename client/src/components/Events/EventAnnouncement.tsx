import { Button, Card, Typography } from "@material-tailwind/react";
import { HiHandRaised } from "react-icons/hi2";

const EventAnnouncement = () => {
  const announcement = {
    title: "Bongo music awards 2024",
    catchPhrase: "Hii imeenda!",
    description:
      "Tunayo furaha kuwajulisha kuwa Bongo Music Awards 2024 itaanza tarehe 24/04/2024. Hivyo nyote mnakaribishwa kushiriki katika kupiga kura zenu mpaka hapo tarehe 10/05/2024.",
  };
  return (
    <>
      <Card
        className="w-full p-6 border border-dashed border-rose-500 rounded-md flex flex-row items-center justify-between gap-4 bg-rose-200"
        id="announcement"
      >
        <div className="hidden md:flex flex-col items-center">
          <HiHandRaised className="text-4xl text-rose-500 animate-bounce" />
          <Typography>Habari!</Typography>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-2 text-rose-600">
            <Typography className="font-LatoBold text-xl md:text-xl lg:text-2xl text-center md:text-start">
              {announcement.title}
            </Typography>
            <Typography className="hidden md:block">|</Typography>
            <Typography className="font-LatoBold text-xl md:text-xl lg:text-2xl truncate">
              {announcement.catchPhrase}
            </Typography>
          </div>
          <Typography className="font-LatoRegular">
            {announcement.description}
          </Typography>
        </div>
      </Card>
      <Button size="sm" className={`rounded-md capitalize my-4 transition ease-in-out text-rose-50 bg-rose-600 hover:bg-rose-800 font-LatoRegular w-full md:w-auto`}>Go to current event</Button>
    </>
  );
};

export default EventAnnouncement;