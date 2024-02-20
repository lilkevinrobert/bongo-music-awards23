import React, { useState, useEffect } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineEdit,
  MdOutlineDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import AddArtistForm from "../Forms/AddArtistForm";
import axios from "../../api/axios.ts";
import EditArtist from "../Forms/EditArtist.tsx";
import useFetch from "../../hooks/useFetch.ts";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
import LoadingTable from "../Loading/LoadingTable.tsx";
// import EditArtist from "../Forms/EditArtist.tsx";

interface DataRow {
  stage_name: string;
  fullname: string;
  genre: string;
  phone: string;
  email: string;
}

interface ArtistsData {
  data: []
}
interface FetchResult {
  data: ArtistsData | null;
  loading: boolean;
  error: Error | null;
}

const ArtistsDataTable: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [data, setData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Add Artist Form Handling
  const [open, setOpen] = React.useState(false);
  const [editOpen, serEditOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleEdit = () => serEditOpen((c) => !c);

  // Get data
  const {
    data: artistsData,
    loading: artistsDataLoading,
    error: artistsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/artists`);

  useEffect(() => {
    // Filter data based on the search term
    // const filtered = data.filter((row) => {
    //     return Object.values(row).some((value) =>
    //         value.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // });
    console.log(data);
    console.log(artistsDataError);
    //setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <>
      {artistsDataLoading ? (
         <LoadingTable />
      ) : artistsDataError  ? (
        <p>network error</p>
      ) : artistsData?.data.length === 0 ? (
        <AddEmptyState itemName="artist" />
        ) : (
          <div className="mx-auto py-4">
          <div className="flex flex-row items-center justify-between mb-4 w-full">
            <div className="flex flex-row items-center justify-between w-auto">
              <input
                type="text"
                placeholder="Search artist..."
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
                <AddArtistForm closeModal={handleOpen} />
              </div>
            </Dialog>

            <Dialog
              size="xs"
              open={editOpen}
              handler={handleEdit}
              className="bg-transparent shadow-none"
            >
              <div className="h-full border-red-400 flex items-center">
                <EditArtist closeModal={handleEdit} />
                {/*how to pass props*/}
              </div>
            </Dialog>
          </div>

          <table className="table-auto w-full bg-white border shadow">
            <thead>
              <tr className="bg-gray-200 text-left font-LatoBold">
                <th className="px-4 py-2">Stage Name</th>
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Genre</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="font-LatoRegular text-sm">
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : ""
                  } group/actions`}
                >
                  <td className="border px-4 py-2 capitalize">
                    {row.stage_name}
                  </td>
                  <td className="border px-4 py-2 capitalize">
                    {row.fullname}
                  </td>
                  <td className="border px-4 py-2 capitalize">{row.genre}</td>
                  <td className="border px-4 py-2 capitalize">{row.phone}</td>
                  <td className="border px-4 py-2 lowercase">{row.email}</td>
                  <td className="border px-4 py-2 opacity-80 transition-all ease-linear group-hover/actions:block">
                    <NavLink to={`../artists/${row.stage_name}`}>
                      <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 group">
                        <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out" />
                      </button>
                    </NavLink>
                    <button
                      className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-green-700 group"
                      onClick={handleEdit}
                    >
                      <MdOutlineEdit className="w-5 h-5 text-green-500 group-hover:text-white transition ease-in-out" />
                    </button>
                    <button className="bg-transparent px-2 py-1 rounded hover:bg-red-700 group">
                      <MdOutlineDeleteOutline className="w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out" />
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

export default ArtistsDataTable;
