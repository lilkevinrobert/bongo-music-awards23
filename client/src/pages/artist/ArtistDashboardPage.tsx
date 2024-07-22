import { Typography } from "@material-tailwind/react";
import ArtistLayout from "../../components/Layout/ArtistLayout";
import ArtistNominationsAside from "../../components/Nomination/ArtistNominationsAside";
import ArtistDashboardOptions from "../../components/Options/ArtistDashboardOptions";
import ArtistSalutations from "../../components/Salutations/ArtistSalutations";

const ArtistDashboardPage = () => {
  return (
    <ArtistLayout>
      <div className="w-full h-[94vh] flex gap-8 transparent text-black">
        <section className="w-8/12 space-y-6 bg-zinc-50 rounded-tr-3xl">
          <div className="h-2/6">
            <ArtistSalutations />
          </div>
          <div className="h-4/6 px-6">
            <ArtistDashboardOptions />
          </div>
        </section>
        <section className="w-4/12 px-4 bg-transparent">
          <Typography variant="h4" className="capitalize font-LatoBold text-lg">
            nominations
          </Typography>
          <ArtistNominationsAside />
        </section>
      </div>
    </ArtistLayout>
  );
};

export default ArtistDashboardPage;
