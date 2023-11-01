import {
  Button,
  Card,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaMusic } from "react-icons/fa6";
import {
  MdDelete,
  MdDeleteOutline,
  MdOutlineClose,
  MdOutlineWarning,
} from "react-icons/md";

type Genre = {
  id: string;
  name: string;
};
const GenreCard = ({ id, name }: Genre) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const handleOpenConfirmDelete = () => setOpenConfirmDelete((cur) => !cur);

  function menuDeleteHandler() {
    fetch(`${BASE_URL}/genres/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        genreId: id,
      }),
    });
    
    handleOpenConfirmDelete();
    toast.success(
      <p className="capitalize">{`Genre Deleted Successfully!`}</p>
    );
    window.setTimeout(() => window.location.reload(), 2000);
  }
  return (
    <>
      <Card className="group w-full h-32 rounded-md cursor-pointer hover:bg-slate-100">
        <CardBody className="flex flex-row items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4">
            <FaMusic className="sm:w-8 sm:h-8 lg:w-20 lg:h-16" />
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 capitalize"
            >
              {name}
            </Typography>
          </div>
          <MdDelete
            onClick={handleOpenConfirmDelete}
            className="hidden group-hover:block group-transition-all group-ease-in-out w-14 h-10 rounded-md cursor-pointer transition ease-in-out text-red-400 hover:bg-red-500 hover:text-white"
          />
        </CardBody>
      </Card>
      <Toaster position="top-center" />

      {/* Confirm Delete */}
      <Dialog
        size="xs"
        open={openConfirmDelete}
        handler={handleOpenConfirmDelete}
        className="bg-transparent shadow-none py-24 "
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="mx-auto w-full max-w-[24rem] p-4 rounded-md">
          <DialogHeader className="flex flex-row items-center justify-between">
            <Typography variant="h5"> Genre Delete</Typography>
            <MdOutlineClose
              className="w-8 h-8 hover:cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={handleOpenConfirmDelete}
            />
          </DialogHeader>
          <DialogBody className="capitalize flex flex-row items-start justify-center">
            <Typography className="flex items-center gap-4">
              <MdOutlineWarning className="w-8 h-8 text-yellow-400" />
              <p className="capitalize">This action is irreversible.</p>
            </Typography>
          </DialogBody>
          <DialogFooter className="flex items-center justify-center">
            <Button
              variant="gradient"
              className="flex items-center justify-center gap-2 bg-red-400 hover:bg-red-600 transition ease-in-out"
              onClick={menuDeleteHandler}
            >
              <MdDeleteOutline className="w-8 h-8" />
              <span>yes, delete!</span>
            </Button>
          </DialogFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default GenreCard;
