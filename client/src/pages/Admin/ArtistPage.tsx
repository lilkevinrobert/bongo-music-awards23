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
import useFetch from "../../hooks/useFetch";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import LoadingProfile from "../../components/Loading/LoadingProfile";
import Errors from "../../components/Errors/Errors";
import { NavLink, useParams } from "react-router-dom";
import { PiWarningFill } from "react-icons/pi";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";

type DataRow = {
  id: number;
  stage_name: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  genre: string;
  phone: string;
  gender: string;
  email: string;
  user_id: string;
  social_links: {
    youtubeMusicLink: string | null;
    spotifyMusicLink: string | null;
    appleMusicLink: string | null;
    boomPlayMusicLink: string | null;
  } | null;
};

interface ArtistData {
  data: DataRow;
}

interface FetchResult {
  data: ArtistData | null;
  loading: boolean;
  error: Error | null;
}

const ArtistPage: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { artistId } = useParams();

  // Dialog State
  const [openEdit, setOpenEdit] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openSocialsDialog, setOpenSocialsDialog] = useState(false);

  // Dialog handling
  const handleEdit = () => setOpenEdit((c) => !c);
  const handleConfirmDelete = () => setOpenConfirmDelete((c) => !c);
  const handleSocialsDialog = () => setOpenSocialsDialog((c) => !c);

  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600";

  // Get Data
  const {
    data: artistData,
    loading: artistDataLoading,
    error: artistDataError,
  }: FetchResult = useFetch(`${BASE_URL}/artists/${artistId}`);

  const fullName = `${artistData?.data?.first_name} ${artistData?.data?.middle_name} ${artistData?.data?.last_name}`;
  const stageName = `${artistData?.data?.stage_name}`;
  const phoneNumber = `${artistData?.data?.phone}`;
  const gender = `${artistData?.data?.gender}`;
  const genre = `${artistData?.data?.genre}`;
  const email = `${artistData?.data?.email}`;
  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="artists" currentPage="artist" />
      {artistDataLoading ? (
        <LoadingProfile />
      ) : artistDataError ? (
        <Errors errorName={artistDataError?.name} />
      ) : !(
          artistData?.data !== null &&
          artistData?.data !== undefined &&
          Object.keys(artistData?.data).length > 0
        ) ? (
        <AddEmptyState itemName="artist" />
      ) : (
        <div className="h-auto text-slate-900 px-4">
          <div className="flex items-center justify-between">
            <Typography
              variant="h4"
              className="text-sm md:text-xl capitalize font-LatoBold"
            >
              Artist management
            </Typography>
            <div className="flex flex-row items-center gap-2">
              <NavLink to={`/admin/artists/${artistId}/nominations`}>
                <Button
                  size="sm"
                  className="capitalize rounded-full font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
                >
                  nominations
                </Button>
              </NavLink>
              <Button
                size="sm"
                onClick={handleEdit}
                className="flex items-center gap-2 bg-amber-300 hover:bg-amber-400 transition 
            ease-in-out text-slate-900 font-LatoRegular rounded-full capitalize"
              >
                <MdOutlineModeEdit className="text-lg" />
                <Typography
                  variant="paragraph"
                  className="font-LatoRegular text-sm"
                >
                  Edit
                </Typography>
              </Button>
            </div>
          </div>

          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 my-4 gap-6 bg-transparent">
            <div className="w-full md:w-auto mx-2 md:mx-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-2 md:col-span-2">
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
                  className=" h-28 w-28 rounded-3xl object-cover object-center absolute top-10 ml-6 border-4 border-white shadow-md bg-amber-300 font-LatoRegular text-sm"
                  src={imgLink}
                  loading="lazy"
                  alt="profile pic"
                />
                <div className="px-6 pt-14 pb-4">
                  <Typography className="text-lg font-LatoBold capitalize">
                    {fullName}
                  </Typography>
                  <Typography className="text-md font-LatoRegular">
                    This photo will be displayed on artist&apos;s profile
                  </Typography>
                  <div className="flex flex-row items-center py-4 gap-2">
                    <input
                      type="file"
                      name="profile_pic"
                      className="h-10 rounded-full bg-yellow-100 font-LatoRegular"
                    />
                    <Button
                      size="md"
                      className="capitalize transition ease-in-out font-LatoBold hover:bg-slate-800 rounded-full"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Card>

              {/* artist summary */}
              <Card className="bg-white w-full h-full rounded-md px-6 py-6">
                <Typography className="text-lg capitalize font-LatoBold py-4">
                  artist information
                </Typography>
                <div className="space-y-1">
                  <div className="flex flex-row items-center gap-6">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      full name:
                    </Typography>

                    <Typography className="text-sm font-LatoRegular">
                      {fullName}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      stage name:
                    </Typography>
                    <Typography className="text-sm font-LatoRegular capitalize">
                      {stageName}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-12 md:gap-14">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      email:
                    </Typography>
                    <Typography className="text-sm font-LatoRegular">
                      {email}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-11 md:gap-12">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      phone:
                    </Typography>
                    <Typography className="text-sm font-LatoRegular">
                      {phoneNumber}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-11 md:gap-10">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      Gender:
                    </Typography>
                    <Typography className="text-sm font-LatoRegular">
                      {gender}
                    </Typography>
                  </div>
                  <div className="flex flex-row items-center gap-11 md:gap-12">
                    <Typography className="text-sm md:text-md capitalize font-LatoBold">
                      Genre:
                    </Typography>
                    <Typography className="text-sm font-LatoRegular">
                      {genre}
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bio & Social Links */}
            <div className="col-span-2 space-y-6 bg-transparent">
              {/* Biography */}
              <Card className="bg-white h-fit px-0 py-8 rounded-md shadow-none">
                <Typography variant="h6" className="font-LatoBold">
                  Biography
                </Typography>
                <textarea
                  className="rounded mt-4 border-gray-300 font-LatoRegular"
                  rows={4}
                  cols={50}
                >
                  some cool bio for the artist
                </textarea>
                <div className="pt-4">
                  <Button
                    size="sm"
                    className="float-right capitalize rounded-full font-LatoBold transition ease-in-out hover:bg-slate-800"
                  >
                    saves changes
                  </Button>
                </div>
              </Card>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 bg-transparent">
                {/* Social Links */}
                {artistData?.data?.social_links ? (
                  <Card className="w-full md:w-1/2 bg-white h-fit px-6 py-8 rounded-lg">
                    <div className="py-2">
                      <Typography
                        variant="h6"
                        className="capitalize font-LatoBold"
                      >
                        Social Links
                      </Typography>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <FaYoutube className="text-xl text-red-500" />
                        <Typography className="font-LatoRegular text-xs md:text-sm">
                          {artistData?.data?.social_links?.youtubeMusicLink}
                        </Typography>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <FaSpotify className="text-xl text-green-500" />
                        <Typography className="font-LatoRegular text-xs md:text-sm">
                          {artistData?.data?.social_links?.spotifyMusicLink}
                        </Typography>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <SiApplemusic className="text-xl text-red-500" />
                        <Typography className="font-LatoRegular text-xs md:text-sm">
                          {artistData?.data?.social_links?.appleMusicLink}
                        </Typography>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <FaLink className="text-xl text-gray-500" />
                        <Typography className="font-LatoRegular text-xs md:text-sm">
                          {artistData?.data?.social_links?.boomPlayMusicLink}
                        </Typography>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="w-full md:w-1/2 bg-white h-1/2 px-6 py-8 rounded-lg flex flex-col items-center justify-center gap-4 self-baseline shadow-none">
                    <Typography
                      variant="h6"
                      className="self-start font-LatoBold"
                    >
                      Socials
                    </Typography>
                    <PiWarningFill className="text-7xl text-gray-800" />
                    <div className="flex flex-row items-center gap-4">
                      <FaInstagram className="text-2xl text-gray-800" />
                      <FaFacebook className="text-2xl text-gray-800" />
                      <FaXTwitter className="text-2xl text-gray-800" />
                    </div>
                    <Typography className="font-LatoBold text-gray-800">
                      No social links yet!{" "}
                    </Typography>
                    <div
                      onClick={handleSocialsDialog}
                      className="p-2 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-400 transition ease-in-out"
                    >
                      <IoAdd className="text-2xl" />
                    </div>
                  </Card>
                )}

                {/* Delete Account */}
                <Card className="w-full md:w-1/2 bg-white h-full px-8 py-8 shadow-none">
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
                    className="text-sm font-LatoRegular text-red-600"
                  >
                    Once you delete this account, all of its resources and data
                    will be permanently deleted.
                  </Typography>
                  <div className="flex flex-col items-center justify-between my-2">
                    <Typography className="font-LatoRegular text-sm text-red-600">
                      This action is irreversible.
                    </Typography>
                    <Button
                      onClick={handleConfirmDelete}
                      size="sm"
                      className="flex flex-row items-center justify-between gap-2 capitalize my-2 transition ease-in-out bg-red-600 hover:bg-red-800 rounded-full"
                    >
                      <MdDelete className="hidden lg:block text-base text-white" />
                      <span className="w-fit font-LatoRegular text-sm">
                        delete account
                      </span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}

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
      <Dialog
        size="xs"
        open={openSocialsDialog}
        handler={handleSocialsDialog}
        className="bg-transparent shadow-none m-0 flex flex-col items-center justify-center"
      >
        <Card className="mx-auto w-full max-w-[24rem] px-4 py-2 rounded-md shadow-md">
          <Typography
            variant="h6"
            className="text-xl capitalize font-LatoBold text-gray-900"
          >
            Add Social Media Platform
          </Typography>
          <div className="flex flex-col my-4">
            <label
              htmlFor="platform"
              className="text-sm font-LatoBold text-gray-900 capitalize"
            >
              platform
            </label>
            <div className="h-fit flex flex-row items-center justify-center gap-1">
              <div className="w-10 h-10 hidden md:flex flex-col items-center justify-center rounded-md mt-2 border-2 bg-gray-100">
                <FaLink />
              </div>
              <input
                type="text"
                name="platform"
                placeholder="Enter Link to your social media Platform"
                className="h-10 mt-1 p-2 pl-4 w-full border border-gray-300 font-LatoRegular rounded-md bg-transparent"
              />
            </div>
            <div className="flex flex-row items-center justify-end gap-1 my-2">
              <Button
                type="button"
                variant="outlined"
                onClick={handleSocialsDialog}
                className="bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800 font-LatoBold py-2 px-4 rounded transition ease-in-out"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-4 py-2 bg-gray-900 border text-white font-LatoBold rounded-md hover:bg-yellow-300 hover:text-gray-900 transition-all ease-in-out"
              >
                Add Link
              </Button>
            </div>
          </div>
        </Card>
      </Dialog>
    </Layout>
  );
};

export default ArtistPage;
