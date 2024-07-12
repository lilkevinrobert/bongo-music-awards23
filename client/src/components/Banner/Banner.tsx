import AnimatedImage from "../Animated/AnimatedImage";
import AnimatedText from "../Animated/AnimatedText";
import Logo from "/logo.png";
import TopographyDarkBackground from "/topography-dark.svg";
import { Button, Typography } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-yellow-200 to-yellow-100 font-LatoBold p-auto md:p-32 flex flex-col-reverse md:flex-col-reverse items-center justify-center gap-0 md:gap-0 md:justify-center">
      <img
        className={`absolute w-fit h-full top-0 left-0 z-0 object-cover object-center bg-transparent opacity-5`}
        src={TopographyDarkBackground}
        loading="lazy"
      />
      <img
        className={`absolute w-fit h-full top-0 right-0 z-0 object-cover object-center bg-transparent opacity-5`}
        src={TopographyDarkBackground}
        loading="lazy"
      />
      <div className="z-10 flex flex-col items-center justify-center bg-transparent h-fit">
        <Typography
          variant="h2"
          className="hidden text-black text-xl md:text-6xl font-LatoBold md:font-LatoRegular mb-2"
        >
          Bongo Music Awards 2023
        </Typography>
        <AnimatedText
          text="bongo music awards 2023"
          Wrapper="h2"
          className="capitalize text-gray-950 text-3xl text-center md:text-6xl font-LatoBold md:font-LatoRegular mb-5"
          animationProps={{
            initial: { opacity: 1, y: 20, x: -1000 },
            animate: { opacity: 1, x: 0 },
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              duration: 0.5,
              delay: 0.3,
            },
          }}
        />
        <AnimatedText
          text="hii imeenda!"
          Wrapper="h2"
          className="capitalize text-black text-4xl md:text-6xl lg:text-8xl font-LatoBold"
          animationProps={{
            initial: { opacity: 0, x: -1000 },
            animate: { opacity: 1, x: 0 },
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              duration: 0.5,
              delay: 0.5,
            },
          }}
        />
        <div className="my-8">
          <Button
            type="button"
            size="md"
            className="font-LatoBold text-black hover:text-white bg-yellow-300 hover:bg-gray-950 transition ease-in-out rounded-3xl animate-bounce"
          >
            <Typography>Vote Now</Typography>
          </Button>
        </div>
      </div>
      <div className="z-10 h-fit bg-transparent">
        <AnimatedImage
          src={Logo}
          className=" w-80 h-64 md:w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
