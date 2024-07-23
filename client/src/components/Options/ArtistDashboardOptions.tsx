import { Typography } from "@material-tailwind/react";
import QuickActionCard from "../Cards/QuickActionCard";

const ArtistDashboardOptions = () => {
  return (
    <div className="h-auto">
      <Typography
        variant="h2"
        className="capitalize font-LatoBold text-xl text-center text-gray-950"
      >
        quick actions
      </Typography>
      <div className="my-6 flex flex-row items-center justify-center gap-5">
        <QuickActionCard title="songs" />
        <QuickActionCard title="nominations" />
        <QuickActionCard title="profile" />
      </div>
    </div>
  );
};

export default ArtistDashboardOptions;
