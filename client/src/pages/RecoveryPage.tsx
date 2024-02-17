import { Button, Input, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const RecoveryPage = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="w-screen h-screen bg-white py-4 px-6 flex items-center justify-center">
      <div className="text-slate-950">
        <div className="pb-4">
          <Typography className="text-2xl text-center text-slate-900">
            Bongo <span className="text-yellow-400"> Music Awards</span>
          </Typography>
          <Typography className="text-center text-sm font-light">
            Password Recovery
          </Typography>
        </div>
        <Typography className="text-sm font-LatoLight w-full py-4">We'll send password reset instructions to the email address associated with your account.</Typography>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Typography>Email Address</Typography>
            <Input
              placeholder="Enter your recovery email"
              crossOrigin={undefined}
              className="rounded-md"
            />
          </div>
          <Button className="transition ease-in-out font-bold hover:text-slate-900 hover:bg-yellow-400">
            Proceed
          </Button>
        </form>
        <div className="text-center">
            <NavLink to="/">
        <Typography className="py-4 text-sm font-LatoRegular text-blue-600">Back Home</Typography>
        </NavLink>
        </div>
        <Typography className="text-center text-xs font-light text-slate-400 py-4">
          &copy; {getYear()}
        </Typography>
      </div>
    </div>
  );
};

export default RecoveryPage;
