import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

interface IconArgs {
  open: boolean;
}

const Icon = ({ open }: IconArgs) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform mr-2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const AdminArtistNominations = () => {
  // accordion controls
  const [open, setOpen] = useState<Array<number>>([]);

  const openHandler = (value: number) => {
    setOpen((prevOpen) =>
      prevOpen.includes(value)
        ? prevOpen.filter((item) => item !== value)
        : [...prevOpen, value]
    );
  };

  const nominations = [
    {
      awards: "Bongo Music Awards 2024",
      isActive: true,
      nominations: [
        {
          category: "song of the year",
          nomination: {
            title: "Some song",
            artist: "Stage name",
            votes: 1243,
          },
        },
        {
          category: "artist of the year",
          nomination: {
            title: "Some song",
            artist: "Stage name",
            votes: 547,
          },
        },
      ],
    },
    {
      awards: "Bongo Music Awards 2023",
      isActive: false,
      nominations: [
        {
          category: "best upcoming male artist",
          nomination: {
            title: "Stage name",
            artist: "Stage name",
            votes: 541,
          },
        },
        {
          category: "best video of the year",
          nomination: {
            title: "Some song",
            artist: "Stage name",
            votes: 200,
          },
        },
        {
          category: "best collaboration of the year",
          nomination: {
            title: "Some song",
            artist: "Stage name",
            votes: 251,
          },
        },
        {
          category: "song of the year",
          nomination: {
            title: "Some song",
            artist: "Stage name",
            votes: 248,
          },
        },
        {
          category: "album of the year",
          nomination: {
            title: "Album name",
            artist: "Stage name",
            votes: 248,
          },
        },
      ],
    },
  ];
  return (
    <div className="bg-gray-50">
      <div>
        {nominations.map((item, i) => (
          <Accordion
            key={i}
            open={open.includes(i + 1)}
            icon={<Icon open={open.includes(i + 1)} />}
            className="hover:bg-amber-50"
          >
            <AccordionHeader
              onClick={() => openHandler(i+1)}
              className="font-LatoBold text-base"
            >
              <div className="flex items-center gap-2 pl-2 border-2 border-transparent border-l-gray-700 border-r-transparent">
                <Typography className="text-gray-800">{item.awards}</Typography>
                {item.isActive ? (
                  <div className="text-xs md:text-sm text-green-400 font-LatoRegular flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>on going now</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </AccordionHeader>
            <AccordionBody className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 bg-white px-4">
              {item.nominations.map((nomination, indx) => (
                <div
                  key={indx}
                  className="w-full flex flex-row justify-between bg-stone-50 shadow"
                >
                  <div className="w-full py-2 px-4 border-2 border-stone-100 border-l-amber-300 border-r-transparent">
                    <Typography className="font-LatoBold uppercase underline underline-offset-2">
                      {nomination.category}
                    </Typography>
                    <Typography className="font-LatoBold capitalize">
                      {nomination.nomination.title}
                    </Typography>
                    <Typography className="font-LatoRegular capitalize text-sm">
                      ~ {nomination.nomination.artist}
                    </Typography>
                  </div>
                  <div className="w-fit h-full self-end flex flex-col items-center justify-center px-2 py-4 text-gray-900 bg-amber-300">
                    <span className="font-LatoBold text-lg">
                      {nomination.nomination.votes}
                    </span>
                    <span className="font-LatoBold">votes</span>
                  </div>
                </div>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default AdminArtistNominations;
