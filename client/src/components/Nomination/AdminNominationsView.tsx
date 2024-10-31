import { NavLink, useParams } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineEvent } from "react-icons/md";
// import { RxDotsVertical } from "react-icons/rx";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import useFetch from "../../hooks/useFetch";
import EditNominationForm from "../Forms/EditNominationForm";
import { useState } from "react";


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
  console.log(nominationData, nominationDataLoading, nominationDataError)
  console.log(nominationData)
  return (
    <>
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
      <div className="">
        <div>
          {
            nominationDataLoading ? <p className="text-base text-gray-900 font-LatoRegular py-3 text-center">Processing nomination status...</p> : nominationDataError ? <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100">Award Nominationations not activated</p> : nominationData ? (
              <>
              
              <div className="flex flex-col gap-2">
              {
                nominationData.data.map((nomination:any, i) => (
                  <div key={i} className="py-6 px-2 bg-gray-50 shadow">
                    <Typography className="text-gray-800 font-LatoBold">{nomination.artist.stage_name}</Typography>
                    {/* Nomination Category */}
                    <div className="flex flex-row items-center justify-between">
                      <NavLink to={`/admin/awards/${nav.awardId}/categories/${nomination.category.id}`}>
                        <Typography className="text-gray-800 font-LatoBold uppercase underline underline-offset-4">
                          {nomination.category.name}
                        </Typography>
                      </NavLink>
                      <FaArrowUp
                        onClick={toTop}
                        className="hidden text-gray-900 animate-bounce cursor-pointer text-base hover:text-lg transition ease-linear"
                      />
                    </div>
                  </div>
                ))
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
