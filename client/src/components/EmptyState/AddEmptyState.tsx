import { useState } from "react";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { BsInbox } from "react-icons/bs";
import { FaArrowDownLong } from "react-icons/fa6";
import AddArtistForm from "../Forms/AddArtistForm";
import AddNominatorForm from "../Forms/AddNominatorForm";
import AddJudgeForm from "../Forms/AddJudgeForm";

type AddEmptyStateProps = {
  itemName: string;
};

const AddEmptyState = ({ itemName }: AddEmptyStateProps) => {
  // state for dialogs
  const [openArtistDialog, setOpenArtistDialog] = useState(false);
  const [openNominatorDialog, setOpenNominatorDialog] = useState(false);
  const [openJudgeDialog, setOpenJudgeDialog] = useState(false);

  // dialogs handlers
  const handleOpenArtistDialog = () => setOpenArtistDialog((cur) => !cur);
  const handleOpenNominatorDialog = () => setOpenNominatorDialog((cur) => !cur);
  const handleOpenJudgeDialog = () => setOpenJudgeDialog((cur) => !cur);
  const dialogSelector = () => {
    switch(itemName){
      case "artist":
        handleOpenArtistDialog()
        return;
      case "nominator":
        handleOpenNominatorDialog()
        return;
      case "judge":
        handleOpenJudgeDialog()
        return;
      default:
        return;
    }
  }
  return (
    <>
      <div className="w-full h-full border border-transparent rounded-lg py-20 flex flex-col items-center justify-center gap-1">
        <FaArrowDownLong className="text-5xl text-slate-500 animate-bounce" />
        <BsInbox className="text-8xl text-slate-500" />
        <Typography className="text-xl text-gray-600 normal-case font-LatoBold">
          Nothing to show yet!
        </Typography>
        <Typography className="text-slate-500 font-LatoRegular">
          Start by adding some
          <span className="capitalize"> {itemName} </span> data
        </Typography>
        <Button size="sm" className="my-4 capitalize bg-slate-950" onClick={dialogSelector}>
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
        <div className="h-full border-red-400 flex items-center">
          <AddArtistForm closeModal={handleOpenArtistDialog} />
        </div>
      </Dialog>
      <Dialog
            size="xs"
            open={openNominatorDialog}
            handler={handleOpenNominatorDialog}
            className="bg-transparent shadow-none"
        >
          <div className="h-full border-red-400 flex items-center">
            <AddNominatorForm closeModal={handleOpenNominatorDialog} />
          </div>
        </Dialog>
      <Dialog
            size="xs"
            open={openJudgeDialog}
            handler={handleOpenJudgeDialog}
            className="bg-transparent shadow-none"
        >
          <div className="h-full border-red-400 flex items-center">
            <AddJudgeForm closeModal={handleOpenJudgeDialog} />
          </div>
        </Dialog>
    </>
  );
};

export default AddEmptyState;
