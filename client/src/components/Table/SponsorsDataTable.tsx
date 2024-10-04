import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditSponsorForm from "../Forms/EditSponsorForm";
import useFetch from "../../hooks/useFetch";
import LoadingTable from "../Loading/LoadingTable";
import Errors from "../Errors/Errors";
import AddEmptyState from "../EmptyState/AddEmptyState";

export type DataRow = {
  id: string;
  sponsor_name: string;
  logo: string;
  award_id: string;
  link: string;
};

interface SponsorsData {
  data: [];
}
interface FetchResult {
  data: SponsorsData | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

const SponsorsDataTable = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [_editId, setEditId] = useState(null);
  const [editData, setEditData] = useState<DataRow | null>(null)
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);

  // Get data
  const { data: sponsorsData, loading, error, fetchData }: FetchResult = useFetch(`${BASE_URL}/sponsors`)

  // Dialogs
  // edit dialog
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const closeEditDialog = () => setOpenEditDialog((cur) => !cur);
  const editDialogHandler = (id: any) => {
    setEditData(filteredData[id])
    if (id) {
      setEditId(id);
    }
    setOpenEditDialog((cur) => !cur);
  };
  // delete dialog
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const closeDeleteDialog = () => setOpenDeleteDialog((cur) => !cur);
  const deleteDialogHandler = (id: string) => {
    if (id) {
      setDeleteId(id);
    }
    setOpenDeleteDialog((cur) => !cur);
  };

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      sponsorsData?.data.filter((row: any) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm, sponsorsData]);
  return (
    <>
      <div className="flex flex-row items-center justify-between w-fit mb-2">
        <input
          type="text"
          placeholder="Search sponsor here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-4 border border-gray-500 rounded-full w-4/4 h-8 font-LatoRegular text-gray-900"
        />
        <Button
          size="sm"
          className="ml-2 rounded-full font-LatoRegular capitalize bg-blue-500 hover:bg-blue-700 transition-all ease-in-out flex items-center justify-center gap-2"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </Button>
      </div>
      {
        loading ? (
          <LoadingTable />
        ) : error ? (
          <Errors errorName={error?.name} message={error?.message} />
        ) : sponsorsData?.data.length === 0 ? (
          <AddEmptyState itemName="sponsors" />
        ) : (
          <table className="table-auto w-full bg-white border shadow">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-900 font-LatoBold">
                <th className="hidden md:block px-4 py-1">Name</th>
                <th className="hidden md:block px-4 py-1">Logo</th>
                <th className="px-4 py-1">Link</th>
                <th className="px-4 py-1 text-center w-40"></th>
              </tr>
            </thead>
            <tbody className="font-LatoRegular text-sm text-gray-800">
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : ""} hover:bg-blue-50 group/actions`}
                >
                  <td className="hidden md:block border-none px-4 py-1 capitalize font-LatoBold">
                    {row.sponsor_name}
                  </td>
                  <td className="hidden md:block border px-0 md:px-4 py-1 capitalize font-normal">
                    <img
                      src={row.logo}
                      alt={`${row.sponsor_name}'s logo`}
                      className="w-24 md:w-40 h-24 md:h-40 object-cover bg-yellow-200 text-xs"
                    />
                  </td>
                  <td className="border p-2">
                    <Typography variant="paragraph" className="text-ellipsis">{row.link}</Typography>
                  </td>
                  <td className="border border-b-transparent border-l-transparent border-r-transparent block px-4 py-1 opacity-80 transition-all ease-linear group-hover/actions:block">
                    <button
                      className="bg-transparent px-2 py-1 rounded-full mr-1 hover:bg-green-700 group"
                      onClick={() => editDialogHandler(index)}
                    >
                      <MdOutlineEdit className="w-5 h-5 text-green-500 group-hover:text-white transition ease-in-out" />
                    </button>
                    <button
                      onClick={() => deleteDialogHandler(row.id)}
                      className="bg-transparent px-2 py-1 rounded-full hover:bg-red-700 group"
                    >
                      <MdOutlineDeleteOutline className="w-5 h-5 text-red-500 group-hover:text-white transition ease-in-out" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }

      {/* Dialogs */}
      <Dialog
        open={openDeleteDialog}
        handler={deleteDialogHandler}
        dismiss={{ enabled: true }}
        className="bg-transparent rounded-none"
      >
        {deleteId && (
          <DialogBody className="flex items-center justify-center">
            <DeleteDialog
              closeModal={closeDeleteDialog}
              fetchData={fetchData}
              deleteId={deleteId}
              deleteItem="Sponsor"
            />
          </DialogBody>
        )}
      </Dialog>
      <Dialog
        open={openEditDialog}
        handler={editDialogHandler}
        className="bg-transparent m-0 rounded-none"
      >
        <DialogBody className="flex items-center justify-center">
          <EditSponsorForm closeModal={closeEditDialog} data={editData && editData} />
        </DialogBody>
      </Dialog>
    </>
  );
};

export default SponsorsDataTable;
