import { Card, Typography } from "@material-tailwind/react";
import { HiHandRaised } from "react-icons/hi2";

const EventAnnouncement = () => {
    const announcement = {
        title: "Bongo music awards 2024",
        catchPhrase: "Hii imeenda!",
        description: "Tunayo furaha kuwajulisha kuwa Bongo Music Awards 2024 itaanza tarehe 24/04/2024. Hivyo nyote mnakaribishwa kushiriki katika kupiga kura zenu mpaka hapo tarehe 10/05/2024.",
    }
  return (
    <>
      <Card className="w-full p-6 border border-dashed border-rose-500 rounded-md flex flex-row items-center justify-between gap-4 bg-rose-200">
        <div className="flex flex-col items-center">
          <HiHandRaised className="text-4xl text-rose-500 animate-bounce" />
          <Typography>Habari!</Typography>
        </div>
        <div className="">
          <div className="flex flex-row items-center gap-2 text-rose-600">
          <Typography className="font-LatoBold text-2xl">{ announcement.title }</Typography>
          <Typography>|</Typography>
          <Typography className="font-LatoBold text-2xl">{ announcement.catchPhrase }</Typography>
          </div>
          <Typography className="font-LatoRegular">{announcement.description}</Typography>
        </div>
      </Card>
    </>
  );
};

export default EventAnnouncement;
