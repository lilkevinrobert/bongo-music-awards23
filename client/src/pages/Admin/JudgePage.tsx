import React from "react";
import Layout from "../../components/Layout/Layout";
import { Button, Card, Typography } from "@material-tailwind/react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Errors from "../../components/Errors/Errors";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import LoadingProfile from "../../components/Loading/LoadingProfile";
import TopographyDarkBackground from "/topography-dark.svg";

type Data = {
  id: number;
  profile_image_url: string;
  organization: string;
  position: string;
  expertise: string;
  phone_number: string;
  role: string;
  bio: string;
  user_id: number;
  event_id: number;
  created_at: string;
  updated_at: string;
};

interface JudgeData {
  data: Data;
}
interface FetchResult {
  data: JudgeData | null;
  loading: boolean;
  error: Error | null;
}

const JudgePage: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { judgeId } = useParams();
  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600";

  // Get data
  const {
    data: judgeData,
    loading: judgeDataLoading,
    error: judgeDataError,
  }: FetchResult = useFetch(`${BASE_URL}/judges/${judgeId}`);
  console.log(judgeData);
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
          <Typography variant="h5" className="capitalize">
            edit judge details
          </Typography>
          {/* Details */}
          <div className="w-full h-full my-4 flex flex-col md:grid grid-cols-2 gap-6">
            <div className="w-full h-full my-4 md:my-0 flex flex-col md:grid md:grid-cols-2 gap-4">
              <Card className="relative w-full h-fit rounded-sm shadow-md bg-white col-span-2">
                {/* background pattern */}
                <img
                  className={`w-full h-28 rounded-t-lg object-cover object-center bg-green-300`}
                  src={TopographyDarkBackground}
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
                    Judge photo
                  </Typography>
                  <Typography className="text-md font-LatoRegular">
                    This will be displayed on judge&apos;s profile
                  </Typography>
                  <div className="flex flex-row items-center py-4 gap-2">
                    <input
                      type="file"
                      name="profile_pic"
                      className="h-10 rounded-md bg-green-200 font-LatoRegular"
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

              {/* Personal Information */}
              <Card className="w-full h-fit px-6 py-8 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-100 shadow-lg rounded-lg">
                <Typography className="capitalize pb-4">
                  Personal information
                </Typography>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      middle name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      surname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value=""
                    />
                  </div>
                  <div className="py-2">
                    <Button
                      size="sm"
                      fullWidth
                      className="bg-transparent capitalize transition ease-in-out text-green-500 hover:text-green-100 border border-green-500 hover:bg-green-700"
                    >
                      save changes
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Contact Informtion */}
              <Card className="bg-white h-fit px-6 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-100 shadow-lg rounded-lg">
                <Typography className="capitalize px-0 py-8">
                  Contact information
                </Typography>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value={judgeData?.data.organization}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      position
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value={judgeData?.data.position}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                      value={judgeData?.data.phone_number}
                    />
                  </div>
                  <div className="py-2 mb-4">
                    <Button
                      size="sm"
                      fullWidth
                      className="bg-transparent capitalize transition ease-in-out text-green-500 hover:text-green-100 border border-green-500 hover:bg-green-700"
                    >
                      save changes
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Bio, Expertise, Role & Event */}
            <div className="w-full flex flex-col gap-4">
              <Card className="bg-white h-fit px-6 py-8 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-100 rounded-lg">
                <Typography>Bio</Typography>
                <textarea
                  className="rounded mt-4 border-slate-200 font-LatoRegular"
                  rows={4}
                  cols={50}
                  value={judgeData?.data.bio}
                ></textarea>
                <div className="pt-4">
                  <Button
                    size="sm"
                    className="bg-transparent capitalize float-right transition ease-in-out text-green-500 hover:text-green-100 border border-green-500 hover:bg-green-700"
                    >
                    save changes
                  </Button>
                </div>
              </Card>
              <Card className="bg-white h-fit px-6 py-8 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-100 rounded-lg flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      expertise
                    </label>
                    <input
                      type="text"
                      name="expertise"
                      className="h-10 border-slate-200 rounded-lg font-LatoRegular pl-4"
                      value={judgeData?.data.expertise}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 font-LatoBold capitalize">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      className="h-10 border-slate-200 rounded-lg font-LatoRegular pl-4"
                      value={judgeData?.data.role}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-LatoBold capitalize">event</label>
                  <input
                    type="text"
                    name="event"
                    className="h-10 border-slate-200 rounded-lg font-LatoRegular pl-4"
                    value=""
                  />
                </div>
                <div className="pt-4">
                  <Button
                    size="sm"
                    className="bg-transparent capitalize float-right transition ease-in-out text-green-500 hover:text-green-100 border border-green-500 hover:bg-green-700"
                    >
                    save changes
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default JudgePage;
