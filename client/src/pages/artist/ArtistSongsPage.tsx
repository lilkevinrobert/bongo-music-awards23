import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import { IoAdd } from "react-icons/io5";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import ArtistLayout from "../../components/Layout/ArtistLayout";
import ArtistSongs from "../../components/Songs/ArtistSongs";
import { useState } from "react";
import AddSongArtistForm from "../../components/Forms/AddSongArtistForm";

const ArtistSongsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <ArtistLayout>
      <BreadcrumbLevel1 user="artist" currentPage="songs" separator="arrow" />
      <div className="px-4 py-2 bg-transparent">
        <div className="flex items-center justify-between">
          <Typography
            variant="h4"
            className="text-lg text-gray-900 font-LatoBold capitalize"
          >
            songs
          </Typography>

          <Button
            size="sm"
            onClick={handleOpen}
            className="rounded-full flex items-center gap-2 group capitalize font-LatoBold bg-gray-900 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900"
          >
            <IoAdd className="text-lg text-white group-hover:text-gray-900" />
            add
          </Button>
        </div>
        <div className="">
            <ArtistSongs />
        </div>
      </div>
            {/* Dialog */}
            <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent m-0 rounded-none"
      >
        <DialogBody className="flex items-center justify-center">
          <AddSongArtistForm closeModal={handleOpen} />
        </DialogBody>
      </Dialog>
    </ArtistLayout>
  );
};

export default ArtistSongsPage;
