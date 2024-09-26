import {
  Typography,
  Dialog,
  Card,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import EditAwardForm from "../Forms/EditAwardForm";
// import useFetch from "../../hooks/useFetch";
import AddAwardSponsorForm from "../Forms/AddAwardSponsorForm";
import AddAwardGenreForm from "../Forms/AddAwardGenreForm";

interface AwardEventDetailsProps {
  awardId: string | undefined;
}

// interface Data {
//   data: [];
// }
// interface FetchResult {
//   data: Data | null;
//   loading: boolean;
//   error: Error | null;
// }

const AwardEventDetails = ({ awardId }: AwardEventDetailsProps) => {
  // const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [openSponsorsDialog, setOpenSponsorsDialog] = useState(false);
  const handleOpenSponsorsDialog = () => setOpenSponsorsDialog((cur) => !cur);
  const [openGenresDialog, setOpenGenresDialog] = useState(false);
  const handleOpenGenresDialog = () =>
    setOpenGenresDialog((cur) => !cur);

  // Data from API...
  const awardSponsorsList: any[] = [
    // {
    //   id: "eiow3oie4xc",
    //   name: "Sponsor's name",
    //   logo: "sponsor's logo",
    // },
    // get list from server
  ];

  const genresList: string[] = [
    // "Bongo Flava",
    // get list from server
  ];
  return (
    <>
      <div className="px-0 pb-4">
        <EditAwardForm awardId={awardId} />
      </div>
      <hr className="mt-4" />
      {/* Sponsors section */}
      <section className="px-4 py-4">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          sponsors
        </Typography>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 py-4">
          {/* Awards Sponsor's card list */}
          {awardSponsorsList.map((sponsor, i) => (
            <Card key={i} className="w-full h-auto shadow-none">
              <div className="w-full h-32">
                <img
                  src="#"
                  alt={sponsor.name}
                  loading="lazy"
                  className="bg-gray-200 h-full object-cover font-LatoRegular text-gray-900 rounded"
                />
              </div>
              <p className="text-gray-900 text-base font-LatoBold">
                {sponsor.name}
              </p>
              <Button
                size="sm"
                variant="outlined"
                className="my-2 rounded-full font-LatoRegular capitalize transition ease-in-out bg-amber-200 hover:bg-amber-300 border-amber-200"
              >
                remove
              </Button>
            </Card>
          ))}
          <div
            onClick={handleOpenSponsorsDialog}
            className="w-full h-48 transition ease-in-out cursor-pointer group rounded bg-transparent border-2 border-dashed border-spacing-4 border-gray-300 hover:border-gray-400 flex flex-col items-center justify-center"
          >
            <IoAdd className=" text-9xl text-gray-300 group-hover:text-gray-400 transition ease-in-out" />
          </div>
        </div>
      </section>
      <hr />
      {/* Genres section */}
      <section className="px-4 py-4">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          genres
        </Typography>
        <div className="py-4 flex items-center flex-wrap gap-2">
          {genresList.map((category, i) => (
            <Typography
              key={i}
              className="font-LatoRegular text-sm text-gray-800 bg-amber-100 w-fit px-4 py-2 rounded-full normal-case"
            >
              {category}
            </Typography>
          ))}
          <span
            onClick={handleOpenGenresDialog}
            className="w-8 h-8 flex flex-col items-center justify-center rounded-full cursor-pointer shadow transiton ease-in-out bg-gray-900 hover:bg-gray-950"
          >
            <IoAdd className="text-white text-lg" />
          </span>
        </div>
      </section>

      {/* Dialogs */}
      <Dialog
        size="md"
        open={openSponsorsDialog}
        handler={handleOpenSponsorsDialog}
        className="bg-transparent shadow-none"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <AddAwardSponsorForm handleOpenSponsorsDialog={handleOpenSponsorsDialog} />
      </Dialog>
      <Dialog
        size="md"
        open={openGenresDialog}
        handler={handleOpenGenresDialog}
        className="bg-transparent shadow-none"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <AddAwardGenreForm handleOpenGenresDialog={handleOpenGenresDialog} awardId={awardId} />
      </Dialog>
    </>
  );
};

export default AwardEventDetails;
