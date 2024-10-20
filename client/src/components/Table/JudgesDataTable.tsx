import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import AddJudgeForm from "../Forms/AddJudgeForm.tsx";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
import LoadingTable from "../Loading/LoadingTable.tsx";
import useFetch from "../../hooks/useFetch.ts";
import Errors from "../Errors/Errors.tsx";
import { IoIosWarning } from "react-icons/io";
import AnimatedDelete from "../Animated/AnimatedDelete.tsx";
import FailedCard from "../Cards/FailedCard.tsx";
import SuccessCard from "../Cards/SuccessCard.tsx";

type DataRow = {
  id: number;
  organization: string;
  position: string;
  expertise: string;
  phone: string;
  user_id: string;
  user_information: {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    gender: string;
    id: number;
    phone: string;
    profile_picture_url: string;
    user_id: string;
  }
};

interface JudgesData {
  data: [];
}
interface FetchResult {
  data: JudgesData | null;
  loading: boolean;
  error: Error | null;
}

const JudgesDataTable: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const HOME_URL = import.meta.env.VITE_HOME_URL;

  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [deleteItem, setDeleteItem] = useState<DataRow>();

  // Judge Form Handling
  const [open, setOpen] = React.useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const [deleteProgressOpen, setDeleteProgressOpen] = React.useState(false);
  const [deleteErrorOpen, setDeleteErrorOpen] = React.useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleDeleteProgress = () => setDeleteProgressOpen((cur) => !cur);
  const handleDeleteError = () => setDeleteErrorOpen((cur) => !cur);
  const handleDeleteSuccess = () => setDeleteSuccessOpen((cur) => !cur);
  const handleConfirmDelete = (rowData: DataRow | undefined) => {
    if (rowData) {
      setDeleteItem(rowData);
      // setDeleteId(rowData.id.toString());
      setDeleteId(rowData.user_information.user_id.toString());
    }
    setConfirmDeleteOpen((c) => !c);
  };

  // Get data
  const {
    data: judgesData,
    loading: judgesDataLoading,
    error: judgesDataError,
  }: FetchResult = useFetch(`${BASE_URL}/judges`);

  // useEffect(() => {
  //   // Filter data based on the search term
  //   const filtered =
  //     judgesData?.data.filter((row) => {
  //       return Object.values(row).some(
  //         (value) =>
  //           typeof value === "string" &&
  //           value.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     }) ?? [];
  //   setFilteredData(filtered);
  // }, [searchTerm, judgesData]);

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      judgesData?.data.filter((row:DataRow) => {
        // Create a combined full name for searching
        const fullName = `${row.user_information.first_name} ${row.user_information.middle_name} ${row.user_information.last_name}`.toLowerCase();
        const phone = `${row.user_information.phone}`;
        const searchLower = searchTerm.toLowerCase();
  
        return (
          // Check if search term is in fullName or other string fields
          fullName.includes(searchLower) || phone.includes(searchTerm) ||
          Object.values(row).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchLower)
          )
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm, judgesData]);
  

  function handleDeleteConfirmation() {
    handleConfirmDelete(undefined); // Close delete confirmation dialog
    handleDeleteProgress(); // Open delete progress
    handleDeleteConfirmationClick(deleteId);
  }

  const handleDeleteConfirmationClick = async (id: string) => {
    // Send delete request
    const response = await fetch(`${BASE_URL}/judges/${id}`, {
      method: "DELETE",
    });
    const { status } = await response.json();
    if (status == 200) {
      handleDeleteProgress();
      handleDeleteSuccess(); // Show error dialog
      window.location.reload();
    } else {
      handleDeleteProgress(); // Close delete progress dialog
      handleDeleteError(); // Show error dialog
    }
  }

  return (
    <>
      {judgesDataLoading ? (
        <LoadingTable />
      ) : judgesDataError ? (
        <Errors errorName={judgesDataError?.name} />
      ) : judgesData?.data.length === 0 ? (
        <AddEmptyState itemName="judge" />
      ) : (
        <div className="mx-auto py-4">
          <div className="flex flex-row items-center justify-between mb-4 w-full">
            <div className="flex flex-row items-center justify-between w-auto">
              <input
                type="text"
                placeholder="Search judge..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 border border-gray-500 rounded-full w-3/4 md:w-4/4 h-8 font-LatoRegular"
              />
              <Button
                size="sm"
                className="ml-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-all ease-in-out hidden md:flex items-center justify-center gap-2"
                onClick={() => setSearchTerm("")}
              >
                <GiMagicBroom className="text-lg font-LatoRegular" />
                Clear
              </Button>
            </div>
            <NavLink to={`/admin/add-user-form?origin=judge`}>
              <Button
                size="sm"
                className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
              >
                <MdOutlinePersonAdd className="text-lg" />
                <Typography className=" font-LatoRegular">Add</Typography>
              </Button>
            </NavLink>

            {/* Dialogs */}
            {/* Add Judge Dialog */}
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex items-center">
                <AddJudgeForm closeModal={handleOpen} />
              </div>
            </Dialog>
            {/* Confirm Delete Dialog */}
            <Dialog
              size="xs"
              open={confirmDeleteOpen}
              handler={handleConfirmDelete}
              className="bg-transparent shadow-none flex flex-row items-center justify-center"
            >
              <div className="h-full border-red-400 flex items-center">
                <div className="bg-white p-8 rounded-md shadow-md">
                  <Typography className="text-slate-900 font-LatoBold text-center">
                    Are you sure you want to Delete?
                  </Typography>
                  <div className="flex flex-col items-center justify-center py-4">
                    <IoIosWarning className="text-4xl text-yellow-400" />
                    <div className="flex flex-col items-center justify-center">
                      <Typography className="text-slate-900 font-LatoRegular">
                        This action is irreversible
                      </Typography>
                      <Typography className="text-slate-900 font-LatoRegular">
                        You are about to delete an acount for
                      </Typography>
                      <span className="text-slate-900 uppercase font-LatoBold">
                        {deleteItem && `${deleteItem?.user_information.first_name} ${deleteItem?.user_information.middle_name} ${deleteItem?.user_information.last_name}`}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-4 bg-transparent">
                    <Button
                      size="sm"
                      type="button"
                      onClick={() => handleConfirmDelete(undefined)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-LatoBold py-2 px-4 rounded mr-2 transition ease-in-out"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      type="button"
                      onClick={handleDeleteConfirmation}
                      className="bg-red-500 hover:bg-red-600 text-white font-LatoBold py-2 px-4 rounded"
                    >
                      Confirm Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog>

            {/* Delete Progress Dialog */}
            <Dialog
              size="xs"
              open={deleteProgressOpen}
              handler={handleDeleteProgress}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex flex-col items-center justify-center">
                <AnimatedDelete />
              </div>
            </Dialog>

            {/* Action failed Dialog */}
            <Dialog
              size="xs"
              open={deleteErrorOpen}
              handler={handleDeleteError}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex flex-col items-center justify-center">
                <FailedCard
                  message="failed to delete"
                  onTrigger={handleDeleteError}
                />
              </div>
            </Dialog>
            {/* Action Successful Dialog */}
            <Dialog
              size="xs"
              open={deleteSuccessOpen}
              handler={handleDeleteSuccess}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex flex-col items-center justify-center">
                <SuccessCard
                  message="Delete confirmed"
                  onTrigger={handleDeleteSuccess}
                />
              </div>
            </Dialog>
          </div>

          <table className="table-auto w-full bg-white border shadow">
            <thead>
              <tr className="bg-gray-200 text-left font-LatoBold">
                <th className="hidden md:table-cell px-4 py-1"></th>
                <th className="px-4 py-1">Full Name</th>
                <th className="hidden lg:table-cell px-4 py-1">Organization</th>
                <th className="hidden lg:table-cell px-4 py-1">Position</th>
                <th className="px-4 py-1">Expertise</th>
                {/* <th className="px-4 py-1">Gender</th> */}
                <th className="hidden md:table-cell px-4 py-1">Phone</th>
                {/* <th className="px-4 py-1">Email</th> */}
                <th className="px-4 py-1 text-center w-1/12"></th>
              </tr>
            </thead>
            <tbody className="font-LatoRegular text-sm">
              {
              filteredData.length === 0 ? (
                <p className="font-LatoRegular text-gray-900 text-base text-center">No data found.</p>
              ) : 
              filteredData.map((row, index) => {
                const fullname = `${row.user_information.first_name} ${row.user_information.middle_name} ${row.user_information.last_name}`
                return (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-50" : ""
                      } group/actions`}
                  >
                    <td className="hidden md:table-cell border px-4 py-1 capitalize">
                      <img
                        src={`${HOME_URL}/${row.user_information.profile_picture_url}`} alt={`${row.user_information.last_name}'s logo`}
                        className="w-24 md:w-8 h-8 md:max-h-8 rounded-full bg-gray-300 shadow object-center object-contain bg-transparent text-xs"
                      />
                    </td>
                    <td className="border px-4 py-1 capitalize">
                      {fullname}
                    </td>
                    <td className="hidden lg:table-cell border px-4 py-1 capitalize">
                      {row.organization}
                    </td>
                    <td className="hidden lg:table-cell border px-4 py-1 capitalize">
                      {row.position}
                    </td>
                    <td className="border px-4 py-1 capitalize">
                      {row.expertise}
                    </td>
                    {/* <td className="border px-4 py-1 capitalize">{row.user_information.gender}</td> */}
                    <td className="hidden md:table-cell border px-4 py-1 capitalize">{row.user_information.phone}</td>
                    {/* <td className="border px-4 py-1 lowercase">{row.user_information.email}</td> */}
                    <td className="px-4 py-1 opacity-80 transition-all ease-linear flex group-hover/actions:flex">
                      <NavLink to={`${row.id}`}>
                        <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group">
                          <MdOutlineEdit className="text-xl text-green-500 group-hover:text-white transition ease-in-out" />
                        </button>
                      </NavLink>
                      <button
                        onClick={() => handleConfirmDelete(row)}
                        className="bg-transparent px-2 py-1 rounded hover:bg-red-700 group"
                      >
                        <MdOutlineDeleteOutline className="text-xl text-red-500 group-hover:text-white transition ease-in-out" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default JudgesDataTable;
