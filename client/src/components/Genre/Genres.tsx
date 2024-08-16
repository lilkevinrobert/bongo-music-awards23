import { Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";
import EditGenreForm from "../Forms/EditGenreForm";
import DeleteDialog from "../Dialog/DeleteDialog";
import useFetch from "../../hooks/useFetch";
import Errors from "../Errors/Errors";
import AddEmptyState from "../EmptyState/AddEmptyState";
import LoadingItems from "../Loading/LoadingItems";
import { Toaster } from "react-hot-toast";
export interface IGenre {
  id: any;
  name: string;
}

interface Data {
  data: [];
}

interface FetchResult {
  data: Data | null;
  loading: boolean;
  error: Error | null;
  fetchData: ()=>void;
}

const Genres = () => {
  // Data from API
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {
    data: genreData,
    loading,
    error,
    fetchData
  }: FetchResult = useFetch(`${BASE_URL}/v1/genres`);

  // Edit dialog handling
  const [_editId, setEditId] = useState(null);
  const [editData, setEditData] = useState<IGenre | null>(null);
  const [openEditGenre, setOpenEditGenre] = useState(false);
  const handleOpenEditGenre = () => setOpenEditGenre((cur) => !cur);
  const openEditDialogHandler = (item: IGenre) => {
    setEditData(item);
    if (item.id) {
      setEditId(item.id);
    }
    setOpenEditGenre((cur) => !cur);
  };

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

  return (
    <>
      {loading ? (
        <LoadingItems />
      ) : error ? (
        <Errors errorName={error.name} />
      ) : genreData?.data.length === 0 ? (
        <AddEmptyState itemName="genre" />
      ) : (
        <div className="flex flex-row flex-wrap gap-2 py-2">
          {genreData?.data.map((item: IGenre, i) => (
            <div
              key={i}
              className="group flex w-fit items-center justify-between gap-2 rounded-full bg-amber-100 px-4 py-2 font-LatoBold text-xs uppercase text-gray-800"
            >
              {item.name}
              <IoIosArrowForward className="text-lg text-gray-500 transition ease-linear group-hover:hidden" />
              <div className="hidden flex-row items-center gap-2 rounded-full bg-amber-50 px-2 transition ease-linear group-hover:flex">
                <AiFillEdit
                  onClick={() => openEditDialogHandler(item)}
                  className="cursor-pointer rounded-full text-lg text-green-500 hover:border-2 hover:border-green-500"
                />
                <TiDelete
                  onClick={() => deleteDialogHandler(item.id)}
                  className="cursor-pointer rounded-full text-xl text-red-500 hover:border-2 hover:border-red-500"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Toaster */}
      <Toaster position="top-center" containerClassName="font-LatoRegular" />

      {/* Dialogs */}
      <Dialog
        size="md"
        open={openEditGenre}
        handler={handleOpenEditGenre}
        className="bg-transparent text-black shadow-none"
      >
        <EditGenreForm
          closeModal={handleOpenEditGenre}
          fetchData={fetchData}
          genre={editData && editData}
        />
      </Dialog>
      <Dialog
        size="md"
        open={openDeleteDialog}
        handler={deleteDialogHandler}
        className="bg-transparent text-black shadow-none"
      >
        {deleteId && (
          <DialogBody className="flex items-center justify-center">
            <DeleteDialog
              closeModal={closeDeleteDialog}
              fetchData={fetchData}
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
