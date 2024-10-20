import React, { useState, useEffect } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { GiMagicBroom } from "react-icons/gi";
import {
  MdOutlinePersonAdd,
  MdOutlineDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import AddArtistForm from "../Forms/AddArtistForm";
import useFetch from "../../hooks/useFetch.ts";
import AddEmptyState from "../EmptyState/AddEmptyState.tsx";
import LoadingTable from "../Loading/LoadingTable.tsx";
import Errors from "../Errors/Errors.tsx";
import { IoIosWarning } from "react-icons/io";
// import EditArtist from "../Forms/EditArtist.tsx";

type DataRow = {
  id: number;
  stage_name: string;
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

interface ArtistsData {
  data: [];
}
interface FetchResult {
  data: ArtistsData | null;
  loading: boolean;
  error: Error | null;
}

const ArtistsDataTable: React.FC = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const HOME_URL = import.meta.env.VITE_HOME_URL;

  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteItem, setDeleteItem] = useState<DataRow>();

  // Artist Form Handling
  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleEdit = () => setEditOpen((c) => !c);
  const handleConfirmDelete = (rowData: DataRow | undefined) => {
    if (rowData) {
      setDeleteItem(rowData);
    }
    setConfirmDeleteOpen((c) => !c);
  };

  // Get data - artists
  const {
    data: artistsData,
    loading: artistsDataLoading,
    error: artistsDataError,
  }: FetchResult = useFetch(`${BASE_URL}/artists`);

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      artistsData?.data.filter((row: DataRow) => {
        // Create a combined full name for searching
        const fullName = `${row.user_information.first_name} ${row.user_information.middle_name} ${row.user_information.last_name}`.toLowerCase();
        const phone = `${row.user_information.phone}`;
        const searchLower = searchTerm.toLowerCase();
        return fullName.includes(searchLower) || phone.includes(searchTerm) || Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm, artistsData]);

  return (
    <>
      {artistsDataLoading ? (
        <LoadingTable />
      ) : artistsDataError ? (
        <Errors errorName={artistsDataError?.name} message={artistsDataError?.message} />
      ) : artistsData?.data.length === 0 ? (
        <AddEmptyState itemName="artist" />
      ) : (
        <div className="mx-auto py-4">
          {/* controls section */}
          <div className="flex flex-row items-center justify-between mb-4 w-full">
            <div className="flex flex-row items-center justify-between w-auto">
              <input
                type="text"
                placeholder="Search artist..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 border border-gray-500 rounded-full w-4/4 h-8 font-LatoRegular"
              />
              <Button
                size="sm"
                className="ml-2 rounded-full bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
                onClick={() => setSearchTerm("")}
              >
                <GiMagicBroom className="text-lg font-LatoRegular" />
                Clear
              </Button>
            </div>
            <NavLink to={`/admin/add-user-form?origin=artist`}>
              <Button
                size="sm"
                className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
              >
                <MdOutlinePersonAdd className="text-lg" />
                <Typography className=" font-LatoRegular">Add</Typography>
              </Button>
            </NavLink>

            {/* Dialogs */}
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
              <div className="h-full border-red-400 flex items-center justify-center">
                <p className="text-gray-900 bg-amber-300 font-LatoBold p-6">edit coming soon...</p>
                <p className="text-gray-900 bg-amber-300 font-LatoBold p-6">(Press Esc to close dialog)</p>
                {/* <EditArtist closeModal={handleEdit} /> */}
                {/*how to pass props*/}
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
                        {deleteItem && deleteItem?.stage_name}
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

          <table className="table-auto w-full bg-white border shadow">
            <thead>
              <tr className="bg-gray-200 text-left font-LatoBold">
                <th className="px-4 py-1"></th>
                <th className="px-4 py-1">Stage Name</th>
                <th className="px-4 py-1">Full Name</th>
                <th className="px-4 py-1">Phone</th>
                <th className="px-4 py-1">Email</th>
                <th className="px-4 py-1 text-center w-40"></th>
              </tr>
            </thead>
            <tbody className="font-LatoRegular text-sm">
              {
                filteredData.length === 0 ? (
                  <p className="font-LatoRegular text-gray-900 text-base text-center">No data found.</p>
                ) :
                  filteredData.map((row, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-gray-100" : ""
                        } group/actions`}
                    >
                      <td className="border px-4 py-1 capitalize">
                        <img
                          src={`${HOME_URL}/${row.user_information.profile_picture_url}`} alt={`${row.user_information.last_name}'s logo`}
                          className="w-24 md:w-8 h-8 md:max-h-8 rounded-full bg-gray-300 shadow object-center object-cover bg-transparent text-xs"
                        />
                      </td>
                      <td className="border px-4 py-1 capitalize">
                        {row.stage_name}
                      </td>
                      <td className="border px-4 py-1 capitalize font-normal">
                        {`${row.user_information.first_name} ${row.user_information.middle_name != null ? row.user_information.middle_name : ""
                          } ${row.user_information.last_name}`}
                      </td>
                      <td className="border px-4 py-1 capitalize">{row.user_information.phone}</td>
                      <td className="border px-4 py-1 lowercase">{row.user_information.email}</td>
                      <td className="border border-b-transparent border-l-transparent border-r-transparent block px-4 py-1 opacity-80 transition-all ease-linear group-hover/actions:block">
                        <NavLink to={`../artists/${row.id}`}>
                          <button className="bg-transparent px-2 py-1 rounded mr-1 hover:bg-blue-700 group">
                            <MdOutlineRemoveRedEye className="w-5 h-5 text-blue-500 group-hover:text-white transition ease-in-out" />
                          </button>
                        </NavLink>
                        <button
                          onClick={() => handleConfirmDelete(row)}
                          className="bg-transparent px-2 py-1 rounded hover:bg-red-700 group"
                        >
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
