import { useState } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { BsInbox } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import AddArtistForm from "../Forms/AddArtistForm";
import AddNominatorForm from "../Forms/AddNominatorForm";
import AddJudgeForm from "../Forms/AddJudgeForm";
import AddCategoryForm from "../Forms/AddCategoryForm";
import AddGenreForm from "../Forms/AddGenreForm";

type AddEmptyStateProps = {
  itemName: string;
};

const AddEmptyState = ({ itemName }: AddEmptyStateProps) => {
  // state for dialogs
  const [openArtistDialog, setOpenArtistDialog] = useState(false);
  const [openNominatorDialog, setOpenNominatorDialog] = useState(false);
  const [openJudgeDialog, setOpenJudgeDialog] = useState(false);
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [openGenreDialog, setOpenGenreDialog] = useState(false);

  // dialogs handlers
  const handleOpenArtistDialog = () => setOpenArtistDialog((cur) => !cur);
  const handleOpenNominatorDialog = () => setOpenNominatorDialog((cur) => !cur);
  const handleOpenJudgeDialog = () => setOpenJudgeDialog((cur) => !cur);
  const handleOpenCategoryDialog = () => setOpenCategoryDialog((cur) => !cur);
  const handleOpenGenreDialog = () => setOpenGenreDialog((cur) => !cur);
  const dialogSelector = () => {
    switch (itemName) {
      case "artist":
        handleOpenArtistDialog();
        return;
      case "nominator":
        handleOpenNominatorDialog();
        return;
      case "genre":
        handleOpenGenreDialog();
        return;
      case "judge":
        handleOpenJudgeDialog();
        return;
      case "category":
        handleOpenCategoryDialog();
        return;
      default:
        return;
    }
  };
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg border border-transparent py-20">
        <FaArrowDownLong className="animate-bounce text-5xl text-gray-400" />
        <BsInbox className="text-8xl text-gray-400" />
        <Typography className="font-LatoBold text-xl normal-case text-gray-600">
          Nothing to show yet!
        </Typography>
        <Typography className="font-LatoRegular text-gray-500">
          Start by adding some
          <span className="capitalize"> {itemName} </span> data
        </Typography>
        <Button
          size="sm"
          className="my-4 rounded-full bg-gray-900 font-LatoRegular capitalize text-white transition ease-in-out hover:bg-yellow-300 hover:text-gray-900"
          onClick={dialogSelector}
        >
          add {itemName}
        </Button>
      </div>

      {/* dialogs */}
      <Dialog
        size="xs"
        open={openArtistDialog}
        handler={handleOpenArtistDialog}
        className="bg-transparent shadow-none"
      >
        <div className="flex h-full items-center border-red-400">
          <AddArtistForm closeModal={handleOpenArtistDialog} />
        </div>
      </Dialog>
      <Dialog
        size="xs"
        open={openNominatorDialog}
        handler={handleOpenNominatorDialog}
        className="bg-transparent shadow-none"
      >
        <div className="flex h-full items-center border-red-400">
          <AddNominatorForm closeModal={handleOpenNominatorDialog} />
        </div>
      </Dialog>
      <Dialog
        size="md"
        open={openGenreDialog}
        handler={handleOpenGenreDialog}
        className="bg-transparent shadow-none"
      >
        <AddGenreForm closeModal={handleOpenGenreDialog} />
      </Dialog>
      <Dialog
        size="xs"
        open={openJudgeDialog}
        handler={handleOpenJudgeDialog}
        className="bg-transparent shadow-none"
      >
        <div className="flex h-full items-center border-red-400">
          <AddJudgeForm closeModal={handleOpenJudgeDialog} />
        </div>
      </Dialog>
      <Dialog
        size="xs"
        open={openCategoryDialog}
        handler={handleOpenCategoryDialog}
        className="bg-transparent shadow-none"
      >
        <div className="flex h-full items-center border-red-400">
          <AddCategoryForm closeModal={handleOpenCategoryDialog} />
        </div>
      </Dialog>
    </>
  );
};

export default AddEmptyState;
