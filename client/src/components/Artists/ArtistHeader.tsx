import { Typography } from "@material-tailwind/react";
import defaultProfile from "../../assets/musician.jpg";
import { ArtistData } from "../../pages/Admin/ArtistPage";
import { FaLink } from "react-icons/fa6";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface ArtistHeaderComponentProps {
  artistData: ArtistData;
}

const ArtistHeader: React.FC<ArtistHeaderComponentProps> = ({ artistData }) => {
  console.log(artistData);
  const {
    firstName,
    middleName,
    lastName,
    // stageName,
    // profileImage,
    bio,
    // genre,
    phone,
    email,
    spotifyMusicLink,
    appleMusicLink,
    youtubeMusicLink
  } = artistData;
  const fullName:string = `${firstName} ${middleName} ${lastName}`;
  const artistBio:string = `${bio}`;

  return (
    <section className="flex flex-row my-4 h-36 gap-8 bg-slate-50 shadow-lg rounded-md">
      <div className="w-40 h-full rounded-l-lg">
        <img
          src={defaultProfile}
          alt="profile_image"
          className="border w-40 h-full rounded-l-lg"
        />
      </div>
      <div className="py-6">
        <Typography variant="h2">{fullName}</Typography>
        <Typography className="py-2">{artistBio}</Typography>
      </div>
      <div className="py-6">
        <Typography variant="h1" className="text-slate-950 opacity-80 pb-2">Contacts</Typography>
        <Typography className="flex items-center gap-2"><MdOutlinePhone />{phone}</Typography>
        <Typography className="flex items-center gap-2"><MdOutlineEmail />{email}</Typography>
      </div>
      <div className="py-6">
      <Typography variant="h1" className="text-slate-950 opacity-80 pb-2">Links</Typography>
      <NavLink to={spotifyMusicLink}>
      <Typography className="flex items-center gap-2"><FaLink className="text-green-500" />Spotify</Typography>
      </NavLink>
      <NavLink to={youtubeMusicLink}>
      <Typography className="flex items-center gap-2"><FaLink className="text-red-500" />Youtube Music</Typography>
      </NavLink>
      <NavLink to={appleMusicLink}>
      <Typography className="flex items-center gap-2"><FaLink className="text-slate-950" />Apple Music</Typography>
      </NavLink>
      </div>
    </section>
  );
};

export default ArtistHeader;
