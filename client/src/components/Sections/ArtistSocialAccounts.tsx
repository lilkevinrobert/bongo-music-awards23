import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { Key, useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi"
import { IoAdd } from "react-icons/io5";
import { LuCircle } from "react-icons/lu";
import { TiArrowForward } from "react-icons/ti";
import AddSocialAccountForm from "../Forms/AddSocialAccountForm";

interface ISocialPlatform {
  platform: string;
  link: string;
  handle: string;
}

const ArtistSocialAccounts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  // stored social accounts
    const socials:any = []
  // const socials = [
  //   {
  //     platform: "x",
  //     link: "https://www.x.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "instagram",
  //     link: "https://www.instagram.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "tiktok",
  //     link: "https://www.tiktok.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "facebook",
  //     link: "https://www.facebook.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "spotify",
  //     link: "https://www.spotify.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "youtube",
  //     link: "https://www.youtube.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  //   {
  //     platform: "boomplay",
  //     link: "https://www.boomplay.com/vfx_artist",
  //     handle: "VFX Artist",
  //   },
  // ];

  const platformHandler = (platform: string) => {
    switch (platform) {
      case "x":
        return <FaXTwitter className="w-fit h-fit text-gray-950" />;
      case "instagram":
        return <FaInstagram className="w-fit h-fit text-gray-950" />;
      case "tiktok":
        return <FaTiktok className="w-fit h-fit text-gray-950" />;
      case "facebook":
        return <FaFacebook className="w-fit h-fit text-gray-950" />;
      case "youtube":
        return <FaYoutube className="w-fit h-fit text-gray-950" />;
      case "spotify":
        return <FaSpotify className="w-fit h-fit text-gray-950" />;
        default:
          return <LuCircle className="w-fit h-fit text-gray-950" />;
    }
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <Typography className="text-lg text-gray-900 font-LatoBold mb-4 capitalize">
          Social Accounts
        </Typography>
        <Button
          size="sm"
          onClick={handleOpen}
          className="-mt-4 rounded-full flex items-center gap-2 group capitalize font-LatoBold bg-gray-900 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900"
        >
          <IoAdd className="text-lg text-white group-hover:text-gray-900" />
          add
        </Button>
      </div>
      {socials.length === 0 && (
        <div className="text-gray-900 text-base font-LatoRegular text-center mb-2">
          <Typography variant="small">
            You have not added your social accounts yet.
          </Typography>
          <Typography
            variant="small"
            className="flex items-center justify-center"
          >
            Start by adding one{" "}
            <TiArrowForward className="text-2xl -rotate-45" />{" "}
          </Typography>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {socials &&
          socials.map((item: ISocialPlatform, i: Key | null | undefined) => (
            <div
              key={i}
              className="text-black flex items-center justify-between p-2 mb-2 w-full rounded shadow bg-white"
            >
              <div className="w-10/12 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                  {platformHandler(item.platform)}
                </div>
                <div className=" w-4/5 text-gray-900">
                  <Typography variant="small" className="font-LatoBold">
                    {item.handle}
                  </Typography>
                  <Typography variant="small" className="font-LatoRegular overflow-x-hidden text-ellipsis">
                    {item.link}
                  </Typography>
                </div>
              </div>
              
              <div className="w-10 h-full flex items-center justify-center rounded-full cursor-pointer bg-zinc-50 group hover:bg-gray-800 transition ease-in-out">
                <FiEdit2 className="text-lg text-gray-800 group-hover:text-white group-hover:-rotate-12 transition ease-linear" />
              </div>
            </div>
          ))}
      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent m-0 rounded-none"
      >
        <DialogBody className="flex items-center justify-center">
          <AddSocialAccountForm closeModal={handleOpen} />
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ArtistSocialAccounts;
