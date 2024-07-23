import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import Logo from "/logo.png";

const RecoveryPage = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="w-screen h-screen bg-white py-4 px-6 flex items-center justify-center">
      <div className="text-slate-950">
        <div className="pb-0 flex flex-col items-center justify-center">
          <img src={Logo} alt="bongo music awards logo" className="text-sm w-36" />
          <Typography className="text-center text-sm font-light font-LatoBold">
            Password Recovery
          </Typography>
        </div>
        <Typography className="text-sm font-LatoLight w-full py-4">
          We'll send password reset instructions to the email address associated
          with your account.
        </Typography>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Typography className="font-LatoBold">Email Address</Typography>
            <input
              type="email"
              required
              placeholder="example@someaddress.com"
              className="border border-gray-300 pl-4 rounded-lg font-LatoRegular"
            />
          </div>
          <Button type="submit" className="font-LatoBold hover:text-slate-900 bg-gray-950 hover:bg-yellow-400 transition ease-linear">
            Proceed
          </Button>
        </form>
        <div className="text-center">
          <NavLink to="/">
            <Typography className="py-4 text-sm font-LatoRegular text-blue-600">
              Back Home
            </Typography>
          </NavLink>
        </div>
        <Typography className="text-center text-xs font-LatoRegular text-slate-400 py-4">
          &copy; {getYear()}
        </Typography>
      </div>
    </div>
  );
};

export default RecoveryPage;
