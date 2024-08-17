import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import DeleteDialog from "../Dialog/DeleteDialog";
import EditSponsorForm from "../Forms/EditSponsorForm";
import useFetch from "../../hooks/useFetch";
export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  link: string;
}

const SponsorsDataTable = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [_editId, setEditId] = useState(null);
  const [editData, setEditData] = useState<Sponsor | null>(null)
  const [filteredData, setFilteredData] = useState<Sponsor[]>([]);

  // delete this function later
  const { data:sponsorsData, loading, error, fetchData } = useFetch(`${BASE_URL}/sponsors`)
  console.log(sponsorsData, loading, error)

  // Dialogs
  // edit dialog
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const closeEditDialog = () => setOpenEditDialog((cur) => !cur);
  const editDialogHandler = (id: any) => {
    setEditData(data[id])
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

  const data = [
    {
      id: "ewew242sd1",
      name: "sponsor one",
      logo: "link to sponsor one logo",
      link: "https://www.long-link-example.com/blog/some-super-long-annoying-link-to-some-long-address-with-a-long-link/",
    },
    {
      id: "ewew242sd2",
      name: "sponsor two",
      logo: "link to sponsor two logo",
      link: "link to sponsor two site",
    },
    {
      id: "ewew242sd3",
      name: "sponsor three",
      logo: "link to sponsor three logo",
      link: "link to sponsor three site",
    },
    {
      id: "ewew242sd4",
      name: "sponsor four",
      logo: "link to sponsor four logo",
      link: "https://www.long-link-example.com/blog/some-super-long-annoying-link-to-some-long-address-with-a-long-link/",
    },
    {
      id: "tyak42sd5",
      name: "sponsor five",
      logo: "link to sponsor five logo",
      link: "link to sponsor five site",
    },
  ];

  useEffect(() => {
    // Filter data based on the search term
    const filtered =
      data.filter((row) => {
        return Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }) ?? [];
    setFilteredData(filtered);
  }, [searchTerm]);
  return (
    <>
      <div className="flex flex-row items-center justify-between w-fit mb-2">
        <input
          type="text"
          placeholder="Search artist..."
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
      <table className="table-auto w-full bg-white border shadow">
        <thead>
          <tr className="bg-gray-200 text-left text-gray-900 font-LatoBold">
            <th className="hidden md:block px-4 py-1">Name</th>
            <th className="px-4 py-1">Logo</th>
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
                {row.name}
              </td>
              <td className="border px-0 md:px-4 py-1 capitalize font-normal">
                <img
                  src={row.logo}
                  alt={`${row.name}'s logo`}
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
