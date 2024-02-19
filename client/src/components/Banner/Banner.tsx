import SampleImage from "/vite.svg";
import { Button, Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-200 to-yellow-100 font-LatoBold p-16 md:p-32 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 md:justify-between">
      <div className="flex flex-col items-center justify-center bg-transparent h-fit">
        <Typography variant="h2" className="text-slate-900 text-xl md:text-6xl font-LatoBold md:font-LatoRegular mb-2">
          Bongo Music Awards 2023
        </Typography>
        <Typography variant="h3" className="text-slate-900 text-4xl md:text-6xl lg:text-8xl font-LatoBold capitalize">
          Hii Imeenda!
        </Typography>
        <div className="my-8">
          <Button
            type="button"
            size="md"
            className="bg-yellow-400 hover:bg-slate-900 transition ease-in-out rounded-3xl animate-bounce"
          >
            <Typography>Vote Now</Typography>
          </Button>
        </div>
      </div>
      <div className="h-fit bg-transparent">
        <img
          src={SampleImage}
          alt="event artwork"
          className="text-red-600 w-64 h-72 md:w-96"
        />
      </div>
    </div>
  );
};

export default Banner;
