import { Typography } from "@material-tailwind/react";
import ArtistSearchByEvent from "../Search/ArtistSearchByEvent";
import samplePoster from "/music-poster.jpg";
import { NavLink } from "react-router-dom";

const ArtistNominationsAside = () => {
  const activeEvent = {
    title: "Bongo Music Awards 2024",
    awardsId: "ndk44ojnd",
    poster: samplePoster,
    date: "31 August 2024",
    location: "Mlimani City",
    isActive: true,
    nominations: [
      {
        category: "song of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 1243,
        },
      },
      {
        category: "artist of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 547,
        },
      },
      {
        category: "song of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 1243,
        },
      },
      {
        category: "song of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 1243,
        },
      },
      {
        category: "song of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 1243,
        },
      },
      {
        category: "artist of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 547,
        },
      },
      {
        category: "artist of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 547,
        },
      },
      {
        category: "artist of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 547,
        },
      },
      {
        category: "artist of the year",
        categoryId: "wjwk332d",
        nomination: {
          title: "Some song",
          artist: "Stage name",
          votes: 547,
        },
      },
    ],
  };

  return (
    <div className="py-2 bg-transparent">
      <div className="w-full flex items-center gap-2">
        <ArtistSearchByEvent />
      </div>

      {/* Active event section */}
      <section className="py-4">
        <Typography
          variant="h6"
          className="capitalize font-LatoBold text-base mb-4"
        >
          active event
        </Typography>
        <div className="flex flex-nowrap items-center gap-12">
          {activeEvent && (
            <div className="w-fit h-16 flex gap-2">
              <div className="w-12 h-12">
                <img
                  src={activeEvent.poster}
                  alt="event poster"
                  className="w-full object-cover object-center text-xs font-LatoRegular text-gray-900"
                />
              </div>
              <div className="flex flex-col items-start justify-start h-full">
                <Typography className="font-LatoBold text-base text-gray-900">
                  {activeEvent.title}
                </Typography>
                <Typography className="font-LatoRegular text-base text-gray-900">
                  {activeEvent.date}, {activeEvent.location}
                </Typography>
              </div>
            </div>
          )}
          {!activeEvent && (
            <div className="w-full p-2 rounded bg-yellow-100">
              <Typography className="font-LatoBold text-base text-gray-900 text-center">
                No on-going event at the moment.
              </Typography>
            </div>
          )}
        </div>
      </section>

      {/* Nominations on active event */}
      <section>
        <Typography
          variant="h6"
          className="capitalize font-LatoBold text-base mb-4"
        >
          your nominations
        </Typography>
        <div className="flex flex-col gap-2">
          {activeEvent.nominations?.splice(0, 5).map((item, i) => (
            <div
              key={i}
              className="w-full h-14 flex flex-row justify-between bg-stone-50 shadow"
            >
              <div className="w-full py-2 px-4 border-2 border-stone-100 border-l-amber-300 border-r-transparent">
                <Typography className="font-LatoBold uppercase text-base text-amber-600">
                  {item.category}
                </Typography>
                <Typography className="font-LatoBold text-sm capitalize">
                  {item.nomination.title}
                </Typography>
              </div>
              <div className="w-fit h-full self-end flex flex-col items-center justify-center px-2 py-4 text-gray-900 bg-amber-300">
                <span className="font-LatoBold text-lg">
                  {item.nomination.votes}
                </span>
                <span className="font-LatoBold text-sm">votes</span>
              </div>
            </div>
          ))}
          <NavLink
            to="#"
            className="text-center text-sm text-gray-900 hover:text-amber-700 hover:underline hover:underline-offset-2 font-LatoRegular capitalize transition ease-linear"
          >
            see all
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ArtistNominationsAside;
