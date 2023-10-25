import { Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import { MdPhone, MdLocationPin } from "react-icons/md";
import { HiMiniGlobeAlt } from "react-icons/hi2";

const ContactDetails = () => {
  return (
    <section className="w-full lg:w-4/12 h-fit py-16 px-8 flex flex-col items-center justify-between bg-gradient-to-b lg:bg-gradient-to-r from-yellow-400 to-yellow-200">
      <div className="text-white text-shadow-md">
        <Typography variant="h3" className="subpixel-antialised">
          <Typewriter
            options={{
              strings: [
                "Get in touch with our Support team",
                "Wasiliana na timu yetu ya usaidizi",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
        <Typography variant="h6" className="py-4 antialised">Please, fill up the form. All fields are required.</Typography>
      </div>
      <div className="self-start text-white font-semibold text-shadow-md antialiased px-8 flex flex-col gap-4">
        <div className="flex items-center justify-start gap-4">
            <MdPhone className="w-8 h-8" />
            <Typography>+255 714 456 680</Typography>
        </div>
        <div className="flex items-center justify-start gap-4">
            <HiMiniGlobeAlt className="w-8 h-8" />
            <Typography>josias@bma.com</Typography>
        </div>
        <div className="hidden items-center justify-start gap-4">
            <MdLocationPin className="w-8 h-8" />
            <Typography>Bunju</Typography>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
