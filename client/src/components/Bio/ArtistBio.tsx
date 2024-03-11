import { Card, Typography } from "@material-tailwind/react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import defaultUserImage from "/person.png";

const ArtistBio = () => {
    return(
        <>
        <Card className="rounded-t-md flex flex-row items-center gap-2 md:gap-4">
            <img src={defaultUserImage} alt="artist_img" className="w-1/2 md:w-40 h-40 font-LatoRegular rounded-l-md" />
            <div className="w-1/2 self-baseline font-LatoRegular py-4">
                <Typography className="">Naseeb Abdul</Typography>
                <Typography className="">Diamond Platnumz</Typography>
                <Typography className=" truncate">diamond_platnumz@gmail.com</Typography>
                <Typography className="">Bongo Flava</Typography>
                <Typography className="text-sm text-gray-500">Member since 2024</Typography>
            </div>
        </Card>
        <Card className="flex flex-row items-center justify-center gap-4 py-4 rounded-b-md border-t">
            {/* social links */}
            <MdFacebook className="text-gray-700 text-3xl" />
            <FaInstagram className="text-gray-700 text-3xl" />
            <FaTiktok className="text-gray-700 text-3xl" />
            <FaYoutube className="text-gray-700 text-3xl" />
        </Card>
        </>
    )
}

export default ArtistBio;