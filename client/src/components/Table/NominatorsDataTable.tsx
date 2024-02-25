import React, { useState, useEffect } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import useFetch from "../../hooks/useFetch.ts";
import AddNominatorForm from "../Forms/AddNominatorForm.tsx";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
import Errors from "../Errors/Errors.tsx";
import LoadingTable from "../Loading/LoadingTable.tsx";
import { NavLink } from "react-router-dom";
import { IoIosWarning } from "react-icons/io";

type DataRow = {
  id: number;
  fullname: string;
  event: string;
  role: string;
  phone: string;
  email: string;
  user_id: string;
};

interface NominatorsData {
  data: [];
}
interface FetchResult {
  data: NominatorsData | null;
  loading: boolean;
  error: Error | null;
}

const NominatorsDataTable: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteItem, setDeleteItem] = useState<DataRow>();

  // Norminantor Form Handling
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const handleConfirmDelete = (rowData: DataRow | undefined) => {
    if (rowData) {
      setDeleteItem(rowData);
    }
    setConfirmDeleteOpen((c) => !c);
  };

  // Get data
  const {
    data: nominatorsData,
    loading: nominatorsDataLoading,
    error: nominatorsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/nominators`);

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      nominatorsData?.data.filter((row) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm, nominatorsData]);

  return (
    <>
      {nominatorsDataLoading ? (
        <LoadingTable />
      ) : nominatorsDataError ? (
        <Errors errorName={nominatorsDataError?.name} />
      ) : nominatorsData?.data.length === 0 ? (
        <AddEmptyState itemName="nominator" />
      ) : (
        <div className="mx-auto py-4">
          <div className="flex flex-row items-center justify-between mb-4 w-full">
            <div className="flex flex-row items-center justify-between w-auto">
              <input
                type="text"
                placeholder="Search nominator..."
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
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex items-center">
                <AddNominatorForm closeModal={handleOpen} />
              </div>
            </Dialog>
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
                      // onClick={handleDelete}
                      className="bg-red-500 hover:bg-red-600 text-white font-LatoBold py-2 px-4 rounded"
                    >
                      Confirm Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>

          <table className="table-auto overflow-x-auto w-full bg-white border shadow">
            <thead>
              <tr className="bg-gray-200 text-left font-LatoBold">
                <th className="hidden lg:table-cell px-4 py-1">SN</th>
                <th className="px-4 py-1">Full Name</th>
                <th className="px-4 py-1">Event</th>
                <th className="hidden lg:table-cell px-4 py-1">Role</th>
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
                  <td className="hidden lg:table-cell border px-4 py-1 capitalize">
                    {index + 1}
                  </td>
                  <td className="border px-4 py-1 capitalize">
                    {row.fullname}
                  </td>
                  <td className="border px-4 py-1 capitalize">{row.event}</td>
                  <td className="hidden lg:table-cell border px-4 py-1 capitalize">
                    {row.role}
                  </td>
                  <td className="border px-4 py-1 capitalize">{row.phone}</td>
                  <td className="border px-4 py-1 lowercase">{row.email}</td>
                  <td className="border px-4 py-1 opacity-80 transition-all ease-linear flex group-hover/actions:flex">
                    <NavLink to={`${row.user_id}`}>
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

export default NominatorsDataTable;
