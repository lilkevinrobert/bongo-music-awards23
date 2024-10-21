import { NavLink, useParams } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { MdOutlineEvent } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";
import { Button, Card, Dialog, Typography } from "@material-tailwind/react";
import AwardsEventBarChart from "../Charts/AwardsEventBarChart";
import AwardsEventPieChart from "../Charts/AwardsEventPieChart";
import useFetch from "../../hooks/useFetch";
import EditNominationForm from "../Forms/EditNominationForm";
import { useState } from "react";


interface NominationData {
  data: boolean;
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

  const nav = useParams()
  const nominations = [
    {
      category: "Song of the year",
      categoryId: "dkjs93jknd",
      nominees: [
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
        },
        {
          id: "123",
          song: "some song",
          artist: "stage name",
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
        },
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
        },
      ],
    },
    {
      category: "Artist of the year",
      categoryId: "ndae792ash",
      nominees: [
        {
          id: "123",
          song: "some song",
          artist: "stage name",
        },
        {
          id: "1234",
          song: "some other song",
          artist: "stage name",
        },
        {
          id: "12345",
          song: "some other competing song",
          artist: "stage name",
        },
      ],
    },
  ];

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
          <Typography className="text-base text-gray-800 font-LatoBold uppercase py-2 border-2 border-l-amber-300 border-t-transparent border-b-transparent border-r-transparent pl-2 my-2">
            trend
          </Typography>
          {
            nominationDataLoading ? <p className="text-base text-gray-900 font-LatoRegular py-3 text-center">Processing nomination status...</p> : nominationDataError ? <p className="text-base text-gray-700 font-LatoRegular text-center py-3 bg-gray-100">Award Nominationations not activated</p> : nominationData ? (
              <>
                <div className="bg-stone-50 h-fit lg:h-96 rounded grid grid-cols-1 lg:grid-cols-2">
                  <AwardsEventBarChart />
                  <div className="h-96 w-full">
                    <AwardsEventPieChart />
                  </div>
                </div>
                {nominations.map((nomination, i) => (
                  <div key={i} className="py-6">
                    <div className="flex flex-row items-center justify-between">
                      <NavLink to={`/admin/awards/${nav.awardId}/categories/${nomination.categoryId}`}>
                        <Typography className="text-gray-800 font-LatoBold uppercase underline underline-offset-4">
                          {nomination.category}
                        </Typography>
                      </NavLink>
                      <FaArrowUp
                        onClick={toTop}
                        className="text-gray-900 animate-bounce cursor-pointer text-base hover:text-lg transition ease-linear"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {nomination.nominees.map((nominee, ind) => (
                        <Card
                          key={ind}
                          className="h-fit w-full flex flex-row items-center justify-between bg-stone-50 p-2 my-2 shadow rounded-none border-2 border-stone-100 border-l-amber-300"
                        >
                          <div>
                            <Typography className="font-LatoBold text-base text-gray-950 text-pretty normal-case">
                              "{nominee.song}"
                            </Typography>
                            <Typography className="font-LatoRegular text-sm text-gray-900 text-pretty normal-case">
                              ~ {nominee.artist}
                            </Typography>
                          </div>
                          <NavLink to={`/admin/artists/${nominee.id}/nominations`}>
                            <RxDotsVertical />
                          </NavLink>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
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
