import { NavLink } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import TextLogo from "../components/Logo/TextLogo";

const RecoveryPage = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="w-screen h-screen bg-white py-4 px-6 flex items-center justify-center">
      <div className="text-slate-950">
        <div className="pb-0">
          <TextLogo />
          <Typography className="text-center text-sm font-light">
            Password Recovery
          </Typography>
        </div>
        <Typography className="text-sm font-LatoLight w-full py-4">
          We'll send password reset instructions to the email address associated
          with your account.
        </Typography>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Typography>Email Address</Typography>
            <input
              type="email"
              placeholder="example@someaddress.com"
              className="border border-gray-500 pl-4 rounded-lg font-LatoRegular"
            />
          </div>
          <Button className="transition ease-in-out font-bold hover:text-slate-900 hover:bg-yellow-400">
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
        <Typography className="text-center text-xs font-light text-slate-400 py-4">
          &copy; {getYear()}
        </Typography>
      </div>
    </div>
  );
};

export default RecoveryPage;
