import { Breadcrumbs, Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { MdOutlineModeEdit } from "react-icons/md";
import ArtistHeader from "../../components/Artists/ArtistHeader";
import { useEffect, useState } from "react";
import ArtistBody from "../../components/Artists/ArtistBody";

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

    const testData:ArtistData = {
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
        singles: []
    }
    
    useEffect(()=>{
        // Get data about the artist here..
        const fetchData = () => {
            setData(testData);
          };
      
          fetchData();
    }, [])


  return (
    <Layout>
      <div className=" text-slate-900 py-2">
        <Breadcrumbs separator="-">
          <NavLink to="../dashboard" className="opacity-60 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </NavLink>
          <NavLink to="../dashboard" className="opacity-60 px-2">
            <span>Admin</span>
          </NavLink>
          <span className="px-2">Artist</span>
        </Breadcrumbs>
      </div>
      <div className="text-slate-900 px-4">
        <div className="flex items-center justify-between">
          <Typography variant="h3">Artist</Typography>
          <Button className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-900">
            <MdOutlineModeEdit className="w-5 h-5" />
            <Typography>Edit</Typography>
          </Button>
        </div>
        {
            data != null ? <ArtistHeader artistData={data} /> : <p>Loading...</p> 
        }
        {
          data !=null ? <ArtistBody artistData={data} /> : <p>Loading...</p>
        }
      </div>
    </Layout>
  );
};

export default ArtistPage;
