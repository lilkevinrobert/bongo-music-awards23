import React from "react";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { MdOutlineModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import TopographyBackground from "/topography.svg";
import EditArtist from "../../components/Forms/EditArtist";

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

const ArtistPage: React.FC = () => {
  const [data, setData] = useState<ArtistData>();

  // Form State
  const [openEdit, setOpenEdit] = React.useState(false);

  // Form handling
  const handleEdit = () => setOpenEdit((c) => !c);

  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600";

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
          <Typography variant="h4" className="text-xl capitalize">
            Artist management
          </Typography>
          <Button
            size="sm"
            onClick={handleEdit}
            className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-900 font-LatoRegular"
          >
            <MdOutlineModeEdit className="text-lg" />
            <Typography>Edit</Typography>
          </Button>
        </div>

        <div className="w-full h-96 grid grid-cols-3 my-4 gap-4">
          <div className="flex flex-col items-center gap-4">
            {/* profile photo */}
            <Card className="bg-transparent relative w-full h-fit rounded-lg shadow-md">
              {/* background pattern */}
              <img
                className={`w-full h-28 rounded-t-lg object-cover object-center bg-yellow-200`}
                src={TopographyBackground}
              />
              {/* Profile picture */}
              <img
                className=" h-28 w-28 rounded-3xl object-cover object-center absolute top-10 ml-6 border-4 border-white shadow-md"
                src={imgLink}
                alt="profile pic"
              />
              <div className="px-6 pt-14 pb-4">
                <Typography className="text-lg font-LatoBold">
                  Artist photo
                </Typography>
                <Typography className="text-md font-LatoRegular">
                  This will be displayed on artist&apos;s profile
                </Typography>
                <div className="flex flex-row items-center py-4 gap-2">
                  <input
                    type="file"
                    name="profile_pic"
                    className="h-10 rounded-lg bg-yellow-100 font-LatoRegular"
                  />
                  <Button size="md" className="capitalize transition ease-in-out hover:bg-slate-800">
                    Save
                  </Button>
                </div>
              </div>
            </Card>

            {/* artist summary */}
            <Card className="bg-white w-full h-fit rounded-lg shadow-lg px-6 py-6">
              <Typography className="text-lg capitalize font-LatoBold py-4">
                artist information
              </Typography>
              <div className="flex flex-row items-center gap-6">
                <Typography className="text-md capitalize font-LatoBold">
                  full name:
                </Typography>

                <Typography className="text-sm font-LatoRegular">
                  Hamza Jumah Shekilango
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-3">
                <Typography className="text-md capitalize font-LatoBold">
                  stage name:
                </Typography>
                <Typography className="text-md font-LatoRegular">
                  zaju the great
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-12">
                <Typography className="text-md capitalize font-LatoBold">
                  phone:
                </Typography>
                <Typography className="text-md font-LatoRegular">
                  +255 743 471 652
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-14">
                <Typography className="text-md capitalize font-LatoBold">
                  email:
                </Typography>
                <Typography className="text-md font-LatoRegular">
                  zaju@gmail.com
                </Typography>
              </div>
            </Card>
          </div>
          
          {/* Bio */}
          <Card className="bg-white col-span-2 h-fit px-8 py-8 rounded-lg shadow-md">
              <Typography>Bio</Typography>
              <textarea
                className="rounded mt-4 border-slate-200 font-LatoRegular"
                rows={4} cols={50}
              >
                jjksdjks sknasankjn kana jknagklk nakkjkkjr jd ajhriij eij eijoajosij ij ajhfhrha nksnds. hdfshi, jksduhdskj kjweui uihfa674 773j
              </textarea>
              <div className="pt-4">
                <Button
                  size="sm"
                  className="float-right capitalize transition ease-in-out hover:bg-slate-800"
                >
                  saves changes
                </Button>
              </div>
            </Card>
        </div>
      </div>

      {/* Dialogs */}
      <Dialog
              size="xs"
              open={openEdit}
              handler={handleEdit}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex items-center">
                <EditArtist closeModal={handleEdit} />
              </div>
            </Dialog>
    </Layout>
  );
};

export default ArtistPage;
