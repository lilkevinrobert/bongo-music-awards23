import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import useFetch from "../../hooks/useFetch";
import { Typography, Dialog } from "@material-tailwind/react";
import { Card, Button } from "flowbite-react";
import { IoIosWarning } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import Errors from "../../components/Errors/Errors";
import LoadingProfile from "../../components/Loading/LoadingProfile";
import TopographyDarkBackground from "/topography-dark.svg";

type Data = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  profile_image_url: string;
  organization: string;
  position: string;
  expertise: string;
  phone_number: string;
  role: string;
  bio: string;
  user_id: number;
  event: string;
  created_at: string;
  updated_at: string;
};

interface NominatorData {
  data: Data;
}
interface FetchResult {
  data: NominatorData | null;
  loading: boolean;
  error: Error | null;
}

const NominatorPage: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { nominatorId } = useParams();
  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600";

  // Dialog state
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  // Dialog handling
  const handleConfirmDelete = () => setOpenConfirmDelete((c) => !c);

  // Get data
  const {
    data: nominatorData,
    loading: nominatorDataLoading,
    error: nominatorDataError,
  }: FetchResult = useFetch(`${BASE_URL}/nominators/${nominatorId}`);

  console.log(nominatorData);
  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="nominators" currentPage="nominator" />
      {nominatorDataLoading ? (
        <LoadingProfile />
      ) : nominatorDataError ? (
        <Errors errorName={nominatorDataError?.name} />
      ) : !(
          nominatorData?.data !== null &&
          nominatorData?.data !== undefined &&
          Object.keys(nominatorData?.data).length > 0
        ) ? (
        <AddEmptyState itemName="nominator" />
      ) : (
        <div className="text-slate-900 px-4 h-auto">
          <Typography variant="h5" className="capitalize">
            edit nominator details
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
                    nominator photo
                  </Typography>
                  <Typography className="text-md font-LatoRegular">
                    This will be displayed on nominator&apos;s profile
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
                      value={nominatorData?.data.first_name}
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
                      value={
                        nominatorData?.data.middle_name
                          ? nominatorData?.data.first_name
                          : ""
                      }
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
                      value={nominatorData?.data.last_name}
                    />
                  </div>
                  <div className="py-2">
                    <Button
                      size="sm"
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
                      value={nominatorData?.data.organization}
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
                      value={nominatorData?.data.position}
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
                      value={nominatorData?.data.phone_number}
                    />
                  </div>
                  <div className="py-2 mb-4">
                    <Button
                      size="sm"
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
              {/* Bio */}
              <Card className="bg-white h-fit px-6 py-8 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-100 rounded-lg">
                <Typography>Bio</Typography>
                <textarea
                  className="rounded mt-4 border-slate-200 font-LatoRegular"
                  rows={4}
                  cols={50}
                  value={nominatorData?.data.bio}
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
              {/* Expertise, Role and Event */}
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
                      value={nominatorData?.data.expertise}
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
                      value={nominatorData?.data.role}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-LatoBold capitalize">event</label>
                  <input
                    type="text"
                    name="event"
                    className="h-10 border-slate-200 rounded-lg font-LatoRegular pl-4"
                    value={nominatorData?.data.event}
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

              {/* Delete Account */}
              <Card className="w-full md:w-1/2 bg-white h-fit px-8 py-8 rounded-sm shadow-md">
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
                  className="text-sm font-LatoRegular text-green-700"
                >
                  Once you delete this account, all of its resources and data
                  will be permanently deleted.
                </Typography>
                <div className="flex flex-col md:flex-row items-center justify-between my-2">
                  <Typography className="font-LatoRegular text-sm text-green-700">
                    This action is irreversible.
                  </Typography>
                  <Button
                    onClick={handleConfirmDelete}
                    className="flex flex-row items-center gap-2 capitalize my-2 transition ease-in-out bg-green-600 hover:bg-green-800"
                  >
                    <MdDelete className="hidden lg:block text-lg text-white" />{" "}
                    delete account
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* Dialogs */}
      <Dialog
        size="xs"
        open={openConfirmDelete}
        handler={handleConfirmDelete}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
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

export default NominatorPage;
