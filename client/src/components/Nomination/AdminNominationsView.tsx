import { NavLink, useParams } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { RxDotsVertical } from "react-icons/rx";
import { Card, Typography } from "@material-tailwind/react";
import AwardsEventBarChart from "../Charts/AwardsEventBarChart";
import AwardsEventPieChart from "../Charts/AwardsEventPieChart";

const AdminNominationsView = () => {
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
  return (
    <>
      <div>
        <Typography className="text-base text-gray-800 font-LatoBold uppercase py-2 border-2 border-l-amber-300 border-t-transparent border-b-transparent border-r-transparent pl-2 my-2">
          trend
        </Typography>
        <div className="bg-stone-50 h-fit lg:h-96 rounded grid grid-cols-1 lg:grid-cols-2">
          <AwardsEventBarChart />
          <div className="h-96 w-full">
            <AwardsEventPieChart />
          </div>
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
  );
};

export default AdminNominationsView;
