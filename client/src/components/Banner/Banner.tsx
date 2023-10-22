import SampleImage from "/vite.svg";
import { Button, Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-200 to-yellow-100 font-LatoBold p-16 md:p-32 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-0 md:justify-between">
      <div className="flex flex-col items-center justify-center h-1/2">
        <h2 className="text-slate-900 text-3xl md:text-6xl font-LatoRegular mb-2">
          Bongo Music Awards 2023
        </h2>
        <h1 className="text-slate-900 text-6xl md:text-8xl font-LatoBold capitalize">Hii Imeenda!</h1>
        <Button type="button" size="md" className="h-14 bg-yellow-400 hover:bg-slate-900 transition ease-in-out rounded-3xl my-6 animate-bounce">
          <Typography>Vote Now</Typography>
        </Button>
      </div>
      <div className="h-1/2">
        <img src={SampleImage} alt="event artwork" className="text-red-600 w-64 h-72 md:w-96" />
      </div>
    </div>
  );
};

export default Banner;
