import { NavLink, useParams } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineEvent } from "react-icons/md";
// import { RxDotsVertical } from "react-icons/rx";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch";
import EditNominationForm from "../Forms/EditNominationForm";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";


interface NominationData {
  data: [];
}

interface NominaitonFetchResult {
  data: NominationData | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}
interface EditData {
  id: string;
  title: string;
  location: string;
  status: string;
  profile_image_url: string;
}

interface AwardsData {
  data: EditData;
}

interface FetchResult {
  data: AwardsData | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

interface AwardNominationProps {
  awardId: string | undefined;
}

const AdminNominationsView = ({ awardId }: AwardNominationProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const nav = useParams();

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const [openNominationsDialog, setOpenNominationsDialog] = useState(false);
  const handleOpenNominationsDialog = () =>
    setOpenNominationsDialog((cur) => !cur);

  // GET details about the current/selected award event
  const {
    data: awardData,
    loading: awardDataLoading,
    error: awardDataError
  }: FetchResult = useFetch(`${BASE_URL}/awards/${awardId}`);
  // GET details about nomination status
  const {
    data: nominationData,
    loading: nominationDataLoading,
    error: nominationDataError
  }: NominaitonFetchResult = useFetch(`${BASE_URL}/nominations/${awardId}/status`);

  return (
    <>
      {/* Award Data */}
      <div className="flex flex-row items-center justify-between gap-2">
        {
          awardDataLoading ? (
            <p>loading..</p>
          ) : awardDataError ? (
            <p>erorr...</p>
          ) : awardData ? (
            <>
              <div className="flex flex-row items-center gap-2">
                <MdOutlineEvent className="text-2xl text-gray-800" />
                <Typography className="text-base text-amber-500 capitalize font-LatoBold">{awardData?.data.title}</Typography>
              </div>
              <Button size="sm" onClick={handleOpenNominationsDialog} className="bg-amber-300 text-gray-900 font-LatoBold hover:bg-transparent hover:border hover:border-gray-900 transition ease-linear">manage</Button>
            </>
          ) : ""
        }
      </div>
      {/* Nomination Data  */}
      <div className="">
        <div>
          {
            nominationDataLoading ? <p className="text-base text-gray-900 font-LatoRegular py-3 text-center">Processing nomination status...</p> : nominationDataError ? <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100">Award Nominationations not activated</p> : nominationData ? (
              <>
              <div className="flex flex-col gap-2">
                  {
                    nominationDataError ? (<p>A problem fetching nomination data</p>) :
                      nominationData.data.length == 0 ? <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100 capitalize mt-4">no nomination request found.</p>
                        : nominationData.data.map((nominationList: any, i) => {
                          const genreGroup = nominationList?.genre;
                          const genreId = nominationList?.genre_id;
                          return (
                            <div key={i} className="bg-transparent mt-2">
                              <Typography className="font-LatoBold text-gray-900 uppercase pl-2 py-2 bg-amber-100 rounded-r-full">{genreGroup}</Typography>
                              {
                                nominationList.categories.map((nomination: any, count:number) => (
                                  <div key={count} className="py-2 px-2 bg-transparent">
                                    {/* Nomination Category */}
                                    <div className="flex flex-row items-center justify-between">
                                      <div className="flex flex-row items-center ">
                                        <GoDotFill />
                                        <NavLink to={`/admin/awards/${nav.awardId}/categories/${nomination.category_id}`} state={{genre_id: genreId, category_type_id: nomination.category_type_id}}>
                                          <Typography className="text-gray-800 font-LatoBold uppercase underline underline-offset-4">
                                            {nomination.category}
                                          </Typography>
                                        </NavLink>
                                      </div>
                                      <FaArrowUp
                                        onClick={toTop}
                                        className="text-gray-900 animate-bounce cursor-pointer text-base hover:text-lg transition ease-linear"
                                      />
                                    </div>
                                    <div className="hidden grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
                                      {/* {
                                nomination.artists.map((artist: any, i: any) => (
                                  <div key={i} className="bg-amber-100 py-2 px-4 rounded-md">
                                    <Typography className="text-gray-800 text-sm font-LatoBold capitalize">{artist.record_label}</Typography>
                                    <Typography className="text-gray-800 text-sm font-LatoRegular capitalize">~ {artist.stage_name}</Typography>
                                  </div>
                                ))
                              } */}
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          )
                        })
                  }
                </div>
              </>
            ) : <p>Nominationations not activated</p>
          }
        </div>

      </div>

      {/* Dialogs */}
      <Dialog
        size="md"
        open={openNominationsDialog}
        handler={handleOpenNominationsDialog}
        className="bg-transparent shadow-none"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <EditNominationForm awardId={awardId} closeModal={handleOpenNominationsDialog} />
      </Dialog>

    </>
  );
};

export default AdminNominationsView;
