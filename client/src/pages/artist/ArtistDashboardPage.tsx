import { Typography } from "@material-tailwind/react";
import ArtistBio from "../../components/Bio/ArtistBio.tsx";
import DateToday from "../../components/Date/DateToday.tsx";
import ArtistLayout from "../../components/Layout/ArtistLayout.tsx";
import ArtistNomination from "../../components/Nomination/ArtistNomination.tsx";
import EventAnnouncement from "../../components/Events/EventAnnouncement.tsx";
import { MdAnnouncement } from "react-icons/md";

const ArtistDashboard = () => {
  return (
    <ArtistLayout>
      <div className="w-full min-h-screen bg-transparent">
        <div className="w-full">
          <DateToday />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div className="space-y-2">
            <div>
              {/* PROFILE SUMMARY */}
              <Typography className="uppercase text-base text-gray-900 font-LatoBold py-1">
                PROFILE SUMMARY
              </Typography>
              <ArtistBio />
            </div>
            <div>
              {/* nomination status */}
              <Typography className="uppercase text-base text-gray-900 font-LatoBold py-1">
                nomination status
              </Typography>
              <div className="space-y-3">
                <ArtistNomination title="current" />
                <ArtistNomination title="previous" />
              </div>
            </div>
          </div>
          <div className="text-black">
            <div>
              <div className="flex flex-row items-center gap-4">
                <Typography className="uppercase text-base text-gray-900 font-LatoBold py-1">
                  new event
                </Typography>
                <MdAnnouncement className="text-lg md:text-2xl text-yellow-400 animate-pulse" />
              </div>
              <EventAnnouncement />
            </div>
            <p>performance analytics & current nomination</p>
          </div>
        </div>
      </div>
    </ArtistLayout>
  );
};

export default ArtistDashboard;
