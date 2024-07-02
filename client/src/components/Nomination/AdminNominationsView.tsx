import { Card, Typography } from "@material-tailwind/react";
import { FaArrowUp } from "react-icons/fa";

const AdminNominationsView = () => {
  const nominations = [
    {
      category: "Song of the year",
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
      {nominations.map((nomination, i) => (
        <div key={i} className="py-2">
          <div className="flex flex-row items-center justify-between">
            <Typography className="text-gray-800 font-LatoBold uppercase underline underline-offset-4">
              {nomination.category}
            </Typography>
            <FaArrowUp
              onClick={toTop}
              className="text-gray-900 animate-bounce cursor-pointer text-base hover:text-lg transition ease-linear"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {nomination.nominees.map((nominee, ind) => (
              <Card
                key={ind}
                className="h-fit w-full bg-stone-50 p-2 my-2 shadow rounded-none border-2 border-stone-100 border-l-amber-300"
              >
                <Typography className="font-LatoBold text-gray-950 text-pretty normal-case">
                  "{nominee.song}"
                </Typography>
                <Typography className="font-LatoRegular text-gray-900 text-pretty normal-case">
                  ~ {nominee.artist}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdminNominationsView;