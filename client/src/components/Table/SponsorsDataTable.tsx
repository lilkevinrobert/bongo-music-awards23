import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import DeleteDialog from "../Dialog/DeleteDialog";
interface DataRow {
  id: string;
  name: string;
  logo: string;
  link: string;
}

const SponsorsDataTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);

  // Dialogs
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const closeDeleteDialog = () => setOpenDeleteDialog((cur) => !cur);
  const deleteDialogHandler = (id:string) => {
    if(id){
      setDeleteId(id)
    }
    setOpenDeleteDialog((cur) => !cur);
  };

  const data = [
    {
      id: "ewew242sd1",
      name: "sponsor one",
      logo: "link to sponsor logo",
      link: "link to sponsor site",
    },
    {
      id: "ewew242sd2",
      name: "sponsor two",
      logo: "link to sponsor logo",
      link: "link to sponsor site",
    },
    {
      id: "ewew242sd3",
      name: "sponsor three",
      logo: "link to sponsor logo",
      link: "link to sponsor site",
    },
    {
      id: "ewew242sd4",
      name: "sponsor four",
      logo: "link to sponsor logo",
      link: "link to sponsor site",
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
  }, [searchTerm, data]);
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
              className={`${index % 2 === 0 ? "bg-gray-50" : ""} group/actions`}
            >
              <td className="hidden md:block border-none px-4 py-1 capitalize font-LatoBold">
                {row.name}
              </td>
              <td className="border px-0 md:px-4 py-1 capitalize font-normal">
                <img
                  src={row.logo}
                  alt={`${row.name}'s logo`}
                  className="w-full h-24 md:h-40 object-cover bg-amber-200 text-xs"
                />
              </td>
              <td className="border px-2 md:px-4 py-1 capitalize">{row.link}</td>
              <td className="border px-4 py-1 opacity-80 transition-all ease-linear group-hover/actions:block">
                <button
                  className="bg-transparent px-2 py-1 rounded-full mr-1 hover:bg-green-700 group"
                  //   onClick={handleEdit}
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
        size="xs"
        open={openDeleteDialog}
        handler={deleteDialogHandler}
        dismiss={{enabled: true}}
        className="bg-transparent shadow-none"
      >
        <div className="h-full border-red-400 text-black flex flex-col items-center">
          {deleteId && (
            <DialogBody>
              <DeleteDialog closeModal={closeDeleteDialog} deleteId={deleteId} deleteItem="Sponsor" />
            </DialogBody>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default SponsorsDataTable;
