import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import useFetch from "../../hooks/useFetch";
import { NavLink, useParams } from "react-router-dom";
import Errors from "../../components/Errors/Errors";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import LoadingProfile from "../../components/Loading/LoadingProfile";
import TopographyDarkBackground from "/topography-dark.svg";
import { IoIosWarning } from "react-icons/io";
import EditJudgeDetails from "../../components/Forms/EditJudgeDetails";

type JudgeDataRow = {
  id: number;
  organization: string;
  position: string;
  expertise: string;
  biography: string;
  user_id: string;
  user_information: {
    first_name: string;
    middle_name: string;
    last_name: string;
    username: string;
    email: string;
    gender: string;
    id: number;
    phone: string;
    profile_picture_url: string;
    date_of_birth: string;
  }
};

interface JudgeData {
  data: JudgeDataRow;
}
interface FetchResult {
  data: JudgeData | null;
  loading: boolean;
  error: Error | null;
}

const JudgePage: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const HOME_URL = import.meta.env.VITE_HOME_URL;

  const { judgeId } = useParams();

  // Dialog state
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openMaximizeImage, setOpenMaximizeImage] = useState(false);

  // Dialog handling
  const handleConfirmDelete = () => setOpenConfirmDelete((c) => !c);
  const handleMaximizeImage = () => setOpenMaximizeImage((c) => !c);

  // Get data
  const {
    data: judgeData,
    loading: judgeDataLoading,
    error: judgeDataError,
  }: FetchResult = useFetch(`${BASE_URL}/judges/${judgeId}`);

  const fullName = `${judgeData?.data.user_information.first_name} ${judgeData?.data.user_information.middle_name} ${judgeData?.data.user_information.last_name}`
  const email = `${judgeData?.data.user_information.email}`
  const phoneNumber = `${judgeData?.data.user_information.phone}`
  const gender = `${judgeData?.data.user_information.gender}`

  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="judges" currentPage="judge" />
      {judgeDataLoading ? (
        <LoadingProfile />
      ) : judgeDataError ? (
        <Errors errorName={judgeDataError?.name} />
      ) : !(
        judgeData?.data !== null &&
        judgeData?.data !== undefined &&
        Object.keys(judgeData?.data).length > 0
      ) ? (
        <AddEmptyState itemName="judge" />
      ) : (
        <div className="text-slate-900 px-4 h-auto">
          {/* Judge data view */}
          <div className="flex items-center justify-between">
            <Typography
              variant="h4"
              className="text-sm md:text-xl capitalize font-LatoBold"
            >
              judge management
            </Typography>
            <div className="hidden flex-row items-center gap-2">
              <NavLink to={`/admin/artists/${judgeId}/nominations`}>
                <Button
                  size="sm"
                  className="capitalize rounded-full font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
                >
                  nominations
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 mt-4">
            {/* profile photo */}
            <Card className="relative w-full h-fit rounded-lg bg-white md:shadow-inner">
              {/* background pattern */}
              <img
                className={`w-full h-28 rounded-t-lg object-cover object-center bg-green-200`}
                src={TopographyDarkBackground}
                loading="lazy"
              />
              {/* Profile picture */}
              <img
                onClick={handleMaximizeImage}
                className="cursor-pointer h-28 w-28 rounded-3xl object-cover object-center absolute top-10 ml-6 border-4 border-white shadow-md bg-green-200 font-LatoRegular text-sm"
                src={`${HOME_URL}/${judgeData.data.user_information.profile_picture_url}`} alt={`${judgeData.data.user_information.last_name}`}
                loading="lazy"
              />
              <div className="px-6 pt-14 pb-4">
                <Typography className="text-lg font-LatoBold capitalize">
                  {fullName}
                </Typography>
                <Typography className="text-base text-green-700 font-LatoRegular capitalize">
                  ~ {`${judgeData?.data.biography}`}
                </Typography>
              </div>
            </Card>

            {/* judge summary */}
            <Card className="bg-white w-full h-fit rounded-md px-6 py-6 md:shadow-inner">
              <Typography className="text-lg capitalize font-LatoBold py-4">
                judge information
              </Typography>
              <div className="space-y-2">
                <div className="flex flex-row gap-2 md:gap-4">
                  <Typography className="w-1/4 text-sm md:text-md capitalize font-LatoBold">
                    full name:
                  </Typography>
                  <Typography className="flex-grow text-sm md:text-md font-LatoRegular">
                    {fullName}
                  </Typography>
                </div>
                <div className="flex flex-row gap-2 md:gap-4">
                  <Typography className="w-1/4 text-sm md:text-md capitalize font-LatoBold">
                    email:
                  </Typography>
                  <Typography className="text-sm md:text-md font-LatoRegular">
                    {email}
                  </Typography>
                </div>
                <div className="flex flex-row gap-2 md:gap-4">
                  <Typography className="w-1/4 text-sm md:text-md capitalize font-LatoBold">
                    phone:
                  </Typography>
                  <Typography className="text-sm md:text-md font-LatoRegular">
                    {phoneNumber}
                  </Typography>
                </div>
                <div className="flex flex-row gap-2 md:gap-4">
                  <Typography className="w-1/4 text-sm md:text-md capitalize font-LatoBold">
                    Gender:
                  </Typography>
                  <Typography className="text-sm md:text-md uppercase font-LatoRegular">
                    {gender}
                  </Typography>
                </div>
              </div>
            </Card>
            {/* Maximize profile image */}
            <Dialog
              size="xs"
              open={openMaximizeImage}
              handler={handleMaximizeImage}
              className="bg-transparent shadow-none flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-slate-900 bg-opacity-50 flex flex-col items-center justify-center">
                <img
                  onClick={handleMaximizeImage}
                  className="cursor-pointer h-96 w-96 rounded-t-3xl object-cover object-center border-4 border-gray-900 shadow-md bg-green-200 font-LatoRegular text-sm"
                  src={`${HOME_URL}/${judgeData.data.user_information.profile_picture_url}`} alt={`${judgeData.data.user_information.last_name}`}
                  loading="lazy"
                />
                <div className="flex flex-col items-center bg-green-50 w-96 px-4 py-2 shadow-lg rounded-b-3xl">
                  <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
                    {fullName}
                  </Typography>
                </div>
              </div>
            </Dialog>
          </div>

          {/* Headsup - information */}
          <Typography className="text-base py-2 mt-4 md:mt-0 text-center text-gray-500 font-LatoRegular border border-dashed border-green-200 bg-green-50">
            All data added or edited here, will be displayed on the judge&apos;s profile.
          </Typography>

          {/* edit form fields 1 */}
          <div className="my-4">
            <EditJudgeDetails details={judgeData.data} />
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
    </Layout>
  );
};

export default JudgePage;
