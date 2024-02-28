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
  fullname: string;
  organization: string;
  position: string;
  expertise: string;
  role: string;
  phone: string;
  email: string;
  user_id: string;
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
      setDeleteId(rowData.id.toString());
    }
    setConfirmDeleteOpen((c) => !c);
  };

  // Get data
  const {
    data: judgesData,
    loading: judgesDataLoading,
    error: judgesDataError,
  }: FetchResult = useFetch(`${BASE_URL}/judges`);

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      judgesData?.data.filter((row) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
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
    const {status} = await response.json();
    if(status == 200){
      handleDeleteProgress();
      handleDeleteSuccess(); // Show error dialog
      window.location.reload();
    }else {
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
                className="p-4 border border-gray-500 rounded-md w-4/4 h-8 font-LatoRegular"
              />
              <Button
                size="sm"
                className="ml-2 rounded-md bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
                onClick={() => setSearchTerm("")}
              >
                <GiMagicBroom className="text-lg font-LatoRegular" />
                Clear
              </Button>
            </div>
            <Button
              size="sm"
              onClick={handleOpen}
              className="flex items-center justify-center gap-2 rounded-md bg-yellow-300 hover:bg-yellow-400 transition ease-in-out text-slate-950"
            >
              <MdOutlinePersonAdd className="text-lg" />
              <Typography className=" font-LatoRegular">Add</Typography>
            </Button>

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
                        {deleteItem && deleteItem?.fullname}
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
            {/* Action Successful */}
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
                <th className="px-4 py-1">Full Name</th>
                <th className="px-4 py-1">Organization</th>
                <th className="px-4 py-1">Position</th>
                <th className="px-4 py-1">Expertise</th>
                <th className="px-4 py-1">Role</th>
                <th className="px-4 py-1">Phone</th>
                <th className="px-4 py-1">Email</th>
                <th className="px-4 py-1 text-center w-1/12"></th>
              </tr>
            </thead>
            <tbody className="font-LatoRegular text-sm">
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : ""
                  } group/actions`}
                >
                  <td className="border px-4 py-1 capitalize">
                    {row.fullname}
                  </td>
                  <td className="border px-4 py-1 capitalize">
                    {row.organization}
                  </td>
                  <td className="border px-4 py-1 capitalize">
                    {row.position}
                  </td>
                  <td className="border px-4 py-1 capitalize">
                    {row.expertise}
                  </td>
                  <td className="border px-4 py-1 capitalize">{row.role}</td>
                  <td className="border px-4 py-1 capitalize">{row.phone}</td>
                  <td className="border px-4 py-1 lowercase">{row.email}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default JudgesDataTable;
