import { Button, Typography } from "@material-tailwind/react";
import SampleDP from "/person.png";
import { useNavigate } from "react-router-dom";

const EditArtistProfile = () => {
    const navigation = useNavigate();
  return (
    <form className="w-">
      <Typography className="text-lg text-gray-900 font-LatoBold mb-4 capitalize">
          edit profile details
        </Typography>
      <div className="w-full h-auto flex flex-col md:flex-row md:items-center gap-5">
        <div className="ww-full md:w-1/2 space-y-2">
          <div className=" w-full">
            <label
              htmlFor="first_name"
              className="block text-sm font-LatoBold text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-transparent"
            />
          </div>
          <div className=" w-full">
            <label
              htmlFor="last_name"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your contact email"
              className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-transparent"
            />
          </div>
        </div>
        <div className="ww-full md:w-1/2 flex flex-col items-center justify-center gap-2">
        <Typography className="md:hidden text-sm text-gray-900 font-LatoBold self-start capitalize">
          profile photo
        </Typography>
          <div className="w-40 h-40">
            <img
              src={SampleDP}
              alt="profile picture"
              className="w-full h-full text-center text-gray-900 text-sm font-LatoRegular object-cover object-center rounded-md bg-amber-300 border border-gray-300"
            />
          </div>
          <input
            type="file"
            name="profile_photo"
            className="bg-gray-100 rounded-md text-gray-900 font-LatoBold"
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 my-10 md:my-16">
        <Button size="sm" onClick={() => navigation(-1)} className="rounded-full capitalize font-LatoBold bg-transparent border border-gray-900 hover:bg-amber-300 transition ease-linear text-gray-900 hover:text-gray-900 hover:scale-110">go back</Button>
        <Button size="sm" className="rounded-full capitalize font-LatoBold bg-gray-900 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900 hover:scale-110">save changes</Button>
      </div>
    </form>
  );
};

export default EditArtistProfile;
