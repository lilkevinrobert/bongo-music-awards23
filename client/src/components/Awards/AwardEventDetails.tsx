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
import AddAwardSponsorForm, { TempFetchResult } from "../Forms/AddAwardSponsorForm";
import AddAwardGenreForm, { TempFetchResultGenre } from "../Forms/AddAwardGenreForm";
import useFetch from "../../hooks/useFetch";
import LoadingList from "../Loading/LoadingList";
import Errors from "../Errors/Errors";
import { GoDotFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";

interface AwardEventDetailsProps {
  awardId: string | undefined;
}

const AwardEventDetails = ({ awardId }: AwardEventDetailsProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const HOME_URL = import.meta.env.VITE_HOME_URL;

  const [openSponsorsDialog, setOpenSponsorsDialog] = useState(false);
  const handleOpenSponsorsDialog = () => setOpenSponsorsDialog((cur) => !cur);
  const [openGenresDialog, setOpenGenresDialog] = useState(false);
  const handleOpenGenresDialog = () =>
    setOpenGenresDialog((cur) => !cur);

  // GET data - award sponsors
  const {
    data: awardSponsorsList,
    loading: awardSponsorsListLoading,
    error: awardSponsorsListError,
  }: TempFetchResult = useFetch(`${BASE_URL}/awards/${awardId}/sponsors`);

  // GET data - award genres
  const {
    data: awardGenresList,
    loading: awardGenresListLoading,
    error: awardGenresListError,
  }: TempFetchResultGenre = useFetch(`${BASE_URL}/awards/${awardId}/genres`);
  console.log(awardGenresList)
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
          {
            awardSponsorsListLoading ? (
              <LoadingList orientation="landscape" />
            ) : awardSponsorsListError ? (
              <Errors errorName={awardSponsorsListError.name} message={awardSponsorsListError.message} />
            ) : awardSponsorsList?.data.sponsors.length === 0 ? (
              ""
            ) :
              awardSponsorsList?.data.sponsors.map((sponsor: any, i) => (
                <Card key={i} className="w-full h-auto shadow-none">
                  <div className="w-full h-32">
                    <img
                      src={`${HOME_URL}/${sponsor.logo}`} alt={`${sponsor.sponsor_name}'s logo`}
                      loading="lazy"
                      className="bg-gray-200 h-full object-cover text-sm font-LatoRegular text-gray-900 rounded"
                    />
                  </div>
                  <p className="text-gray-900 text-base font-LatoBold">
                    {sponsor.sponsor_name}
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
            <IoAdd className="text-9xl text-gray-300 group-hover:text-gray-400 transition ease-in-out" />
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
          {
            awardGenresListLoading ? (
              <LoadingList orientation="landscape" />
            ) : awardGenresListError ? (
              "Could not fetch data at the moment"
            ) : awardGenresList?.data.genres.length == 0 ? ("") : (
              awardGenresList?.data.genres.map((genre: any, i) => (
                <div
                  key={i}
                  className="relative group flex items-center justify-between gap-2 font-LatoBold text-xs text-gray-800 hover:text-gray-50 uppercase bg-amber-100 hover:bg-gray-800 transition ease-linear w-fit px-4 py-2 rounded-full"
                >
                  <GoDotFill className="text-lg text-gray-700 group-hover:text-gray-50 transition ease-linear" />
                  {genre.name}
                  <div className="invisible group-hover:visible transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-row items-center gap-2 bg-amber-50 px-2 rounded-full">
                    <TiDelete
                      // onClick={() => deleteDialogHandler(item.id)}
                      className="cursor-pointer rounded-full text-xl text-red-500 hover:border-2 hover:border-red-500"
                    />
                  </div>
                </div>
              ))
            )
          }
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
