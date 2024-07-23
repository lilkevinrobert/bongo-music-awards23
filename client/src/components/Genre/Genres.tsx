import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import EditGenreForm from "../Forms/EditGenreForm";
import DeleteDialog from "../Dialog/DeleteDialog";

export interface IGenre {
  id: any;
  name: string;
}

const Genres = () => {
  // Edit dialog handling
  const [_editId, setEditId] = useState(null);
  const [editData, setEditData] = useState<IGenre | null>(null)
  const [openEditGenre, setOpenEditGenre] = useState(false);
  const handleOpenEditGenre = () => setOpenEditGenre((cur) => !cur);
  const openEditDialogHandler = (id:any) => {
    setEditData(genreList[id])
    if(id){
      setEditId(id)
    }
    setOpenEditGenre((cur) => !cur)
  }

  // Delete Dialog handling
  const [deleteId, setDeleteId] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const closeDeleteDialog = () => setOpenDeleteDialog((cur) => !cur);
  const deleteDialogHandler = (id: any) => {
    if (id) {
      setDeleteId(id);
    }
    setOpenDeleteDialog((cur) => !cur);
  };

  // Data from API
  const genreList = [
    {
      id: "dkslds1",
      name: "hip-hop",
    },
    {
      id: "dkslds2",
      name: "bongo flava",
    },
    {
      id: "dkslds3",
      name: "singeli",
    },
    {
      id: "dkslds4",
      name: "taarabu",
    },
  ];
  return (
    <>
    <div className="py-2 flex flex-row flex-wrap gap-2">
      {genreList.map((item, i) => (
        <div
          key={i}
          className="group flex items-center justify-between gap-2 font-LatoBold text-xs text-gray-800 uppercase bg-amber-100 w-fit px-4 py-2 rounded-full"
        >
          {item.name}
          <IoIosArrowForward className="text-lg text-gray-500 group-hover:hidden transition ease-linear" />
          <div className="hidden group-hover:flex flex-row items-center gap-2 transition ease-linear bg-amber-50 px-2 rounded-full">
            <AiFillEdit onClick={() => openEditDialogHandler(i)} className="text-lg text-green-500 cursor-pointer hover:border-2 hover:border-green-500 rounded-full" />
            <TiDelete  onClick={() => deleteDialogHandler(item.id)} className="text-xl text-red-500 cursor-pointer hover:border-2 hover:border-red-500 rounded-full" />
          </div>
        </div>
      ))}
    </div>

    {/* Dialogs */}
    <Dialog
     size="md"
     open={openEditGenre}
     handler={handleOpenEditGenre}
     className="bg-transparent shadow-none text-black"
    >
      <EditGenreForm closeModal={handleOpenEditGenre} genre={editData && editData } />
    </Dialog>
    <Dialog
     size="md"
     open={openDeleteDialog}
     handler={deleteDialogHandler}
     className="bg-transparent shadow-none text-black"
    >
          {deleteId && (
          <DialogBody className="flex items-center justify-center">
            <DeleteDialog
              closeModal={closeDeleteDialog}
              deleteId={deleteId}
              deleteItem="Genre"
            />
          </DialogBody>
        )}
    </Dialog>
    </>
  );
};

export default Genres;
