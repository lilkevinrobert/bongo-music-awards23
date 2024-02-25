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

type DataRow = {
  id: number;
  fullname: string;
  organization: string;
  position: string;
  expertise: string;
  role: string;
  phone: string;
  email: string;
}

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

  // Add Judge Form Handling
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  // Get data
  const {
    data: judgesData,
    loading: judgesDataLoading,
    error: judgesDataError,
  }: FetchResult = useFetch(`${BASE_URL}/judges`);

  useEffect(() => {
    // Filter data based on the search term
    const filtered = judgesData?.data.filter((row) => {
      return Object.values(row).some((value) =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }) ?? [];
    setFilteredData(filtered)
  }, [searchTerm, judgesData]);

  return (
    <>
      {judgesDataLoading ? (
        <LoadingTable />
      ) : judgesDataError ? (
        <Errors errorName={ judgesDataError?.name } />
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
                  <td className="border px-4 py-1 opacity-80 transition-all ease-linear flex group-hover/actions:flex">
                    <NavLink to={`${row.id}`}>
                      <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group">
                        <MdOutlineEdit className="text-xl text-green-500 group-hover:text-white transition ease-in-out" />
                      </button>
                    </NavLink>
                    <button className="bg-transparent px-2 py-1 rounded hover:bg-red-700 group">
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
