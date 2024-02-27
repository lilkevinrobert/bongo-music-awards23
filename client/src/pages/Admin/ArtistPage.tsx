import React from "react";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { FaLink, FaSpotify, FaYoutube } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";
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
  // const [data, setData] = useState<ArtistData>();

  // Dialog State
  const [openEdit, setOpenEdit] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  // Dialog handling
  const handleEdit = () => setOpenEdit((c) => !c);
  const handleConfirmDelete = () => setOpenConfirmDelete((c) => !c);

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
  console.log(testData);

  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="artists" currentPage="artist" />
      <div className="h-auto text-slate-900 px-4">
        <div className="flex items-center justify-between">
          <Typography variant="h4" className="text-sm md:text-xl capitalize">
            Artist management
          </Typography>
          <Button
            size="sm"
            onClick={handleEdit}
            className="flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 transition 
            ease-in-out text-slate-900 font-LatoRegular"
          >
            <MdOutlineModeEdit className="text-lg" />
            <Typography>Edit</Typography>
          </Button>
        </div>

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 my-4 gap-6">
          <div className="w-full md:w-auto mx-2 md:mx-0 flex flex-col items-center gap-4">
            {/* profile photo */}
            <Card className="relative w-full h-fit rounded-lg bg-white">
              {/* background pattern */}
              <img
                className={`w-full h-28 rounded-t-lg object-cover object-center bg-yellow-200`}
                src={TopographyBackground}
                loading="lazy"
              />
              {/* Profile picture */}
              <img
                className=" h-28 w-28 rounded-3xl object-cover object-center absolute top-10 ml-6 border-4 border-white shadow-md"
                src={imgLink}
                loading="lazy"
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
                  <Button
                    size="md"
                    className="capitalize transition ease-in-out hover:bg-slate-800"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Card>

            {/* artist summary */}
            <Card className="bg-white w-full h-fit rounded-lg px-6 py-6">
              <Typography className="text-lg capitalize font-LatoBold py-4">
                artist information
              </Typography>
              <div className="flex flex-row items-center gap-6">
                <Typography className="text-sm md:text-md capitalize font-LatoBold">
                  full name:
                </Typography>

                <Typography className="text-sm font-LatoRegular">
                  Hamza Jumah Shekilango
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-3">
                <Typography className="text-sm md:text-md capitalize font-LatoBold">
                  stage name:
                </Typography>
                <Typography className="text-sm font-LatoRegular">
                  zaju the great
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-11 md:gap-12">
                <Typography className="text-sm md:text-md capitalize font-LatoBold">
                  phone:
                </Typography>
                <Typography className="text-sm font-LatoRegular">
                  +255 743 471 652
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-12 md:gap-14">
                <Typography className="text-sm md:text-md capitalize font-LatoBold">
                  email:
                </Typography>
                <Typography className="text-sm font-LatoRegular">
                  zaju@gmail.com
                </Typography>
              </div>
            </Card>
          </div>

          <div className="col-span-2 space-y-6">
            {/* Bio */}
            <Card className="bg-white h-fit px-8 py-8 rounded-lg">
              <Typography>Bio</Typography>
              <textarea
                className="rounded mt-4 border-slate-200 font-LatoRegular"
                rows={4}
                cols={50}
              >
                jjksdjks sknasankjn kana jknagklk nakkjkkjr jd ajhriij eij
                eijoajosij ij ajhfhrha nksnds. hdfshi, jksduhdskj kjweui
                uihfa674 773j
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
            <div className="flex flex-col md:flex-row-reverse items-center gap-4">
              {/* Social Links */}
              <Card className="w-full md:w-1/2 bg-white h-fit px-6 py-8 rounded-lg">
                <div className="py-2">
                  <Typography className="capitalize font-LatoBold">
                    Social Links
                  </Typography>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <FaYoutube className="text-xl text-red-500" />
                    <Typography className="font-LatoRegular text-xs md:text-sm">
                      {testData.youtubeMusicLink}
                    </Typography>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <FaSpotify className="text-xl text-green-500" />
                    <Typography className="font-LatoRegular text-xs md:text-sm">
                      {testData.spotifyMusicLink}
                    </Typography>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <SiApplemusic className="text-xl text-red-500" />
                    <Typography className="font-LatoRegular text-xs md:text-sm">
                      {testData.appleMusicLink}
                    </Typography>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <FaLink className="text-xl text-gray-500" />
                    <Typography className="font-LatoRegular text-xs md:text-sm">
                      {testData.boomPlayMusicLink}
                    </Typography>
                  </div>
                </div>
              </Card>
              {/* Delete Account */}
              <Card className="w-full md:w-1/2 bg-white h-fit px-8 py-8 rounded-lg">
                <div className="py-2">
                  <Typography className="capitalize font-LatoBold">
                    delete account
                  </Typography>
                  <Typography className="text-sm font-LatoRegular">
                    Permanently delete this account
                  </Typography>
                </div>
                <Typography
                  as="p"
                  className="text-sm font-LatoRegular text-yellow-700"
                >
                  Once you delete this account, all of its resources and data
                  will be permanently deleted.
                </Typography>
                <div className="flex flex-col md:flex-row items-center justify-between my-2">
                  <Typography className="font-LatoRegular text-sm text-yellow-700">
                    This action is irreversible.
                  </Typography>
                  <Button
                    onClick={handleConfirmDelete}
                    className="flex flex-row items-center gap-2 capitalize my-2 transition ease-in-out bg-yellow-600 hover:bg-yellow-800"
                  >
                    <MdDelete className="hidden lg:block text-lg text-white" /> delete account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <Dialog
        size="xs"
        open={openConfirmDelete}
        handler={handleConfirmDelete}
        className="bg-transparent shadow-none flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md">
            <Typography className="text-slate-900 font-LatoBold">
              Are you sure you want to Delete?
            </Typography>
            <div className="flex flex-row items-center justify-center py-4">
              <IoIosWarning className="text-3xl text-yellow-400" />
              <Typography className="text-slate-900 font-LatoRegular">
                This action is irreversible
              </Typography>
            </div>
            <div className="flex items-center justify-center mt-4 bg-transparent">
              <Button
                size="sm"
                type="button"
                onClick={() => handleConfirmDelete()}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-LatoBold py-2 px-4 rounded mr-2 transition ease-in-out"
              >
                Cancel
              </Button>
              <Button
                size="sm"
                type="button"
                // onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-LatoBold py-2 px-4 rounded"
              >
                Confirm Delete
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
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
