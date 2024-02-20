import { Button, Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { MdOutlineModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";

export interface ArtistData {
  stageName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  profileImage: string;
  bio: string;
  genre: string;
  phone: string;
  email: string;
  spotifyMusicLink: string;
  appleMusicLink: string;
  youtubeMusicLink: string;
  boomPlayMusicLink: string;
  dateOfBirth: string;
  placeOfBirth: string;
  awardsWon: string[];
  createdBy: string;
  albums: string[];
  singles: string[];
}

const ArtistPage = () => {
  const [data, setData] = useState<ArtistData>();

  const testData: ArtistData = {
    firstName: "Rajab",
    middleName: "Abdul",
    lastName: "Kahali",
    stageName: "Harmonize",
    profileImage: "",
    bio: "Harmonize is a Tanzanian singer, songwriter and entrepreneur.",
    genre: "Bongo Flava",
    phone: "+255 755 789 123",
    email: "harmonize@gmail.com",
    spotifyMusicLink: "https://open.spotify.com/artist/sample-artist-id",
    appleMusicLink: "https://music.apple.com/us/artist/sample-artist/123456789",
    youtubeMusicLink: "https://music.youtube.com/channel/sample-channel-id",
    boomPlayMusicLink: "Link-to-boom-play-music",
    dateOfBirth: "March 15 1990",
    placeOfBirth: "Chitohori",
    awardsWon: [],
    createdBy: "Admin",
    albums: [],
    singles: [],
  };

  useEffect(() => {
    // Get data about the artist here..
    const fetchData = () => {
      setData(testData);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="artists" currentPage="artist" />
      <div className="text-slate-900 px-4">
        <div className="flex items-center justify-between">
          <Typography variant="h4" className="text-xl">
            Artist
          </Typography>
          <Button
            size="sm"
            className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-900 font-LatoRegular"
          >
            <MdOutlineModeEdit className="text-lg" />
            <Typography>Edit</Typography>
          </Button>
        </div>

      </div>
    </Layout>
  );
};

export default ArtistPage;
