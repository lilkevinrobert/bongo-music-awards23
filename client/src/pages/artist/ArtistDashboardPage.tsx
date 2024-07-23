import { Typography } from "@material-tailwind/react";
import ArtistLayout from "../../components/Layout/ArtistLayout";
import ArtistNominationsAside from "../../components/Nomination/ArtistNominationsAside";
import ArtistDashboardOptions from "../../components/Options/ArtistDashboardOptions";
import ArtistSalutations from "../../components/Salutations/ArtistSalutations";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";

const ArtistDashboardPage = () => {
  const isEventActive:boolean = true;
  return (
    <ArtistLayout>
      <div className="md:hidden">
        <BreadcrumbLevel1 currentPage="home" user="artist" />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 transparent">
        <section className={`${isEventActive ? "w-full md:w-8/12 rounded-tr-3xl bg-zinc-50" : "w-full space-y-6"}`}>
          <div className="h-2/6 py-20">
            <ArtistSalutations />
          </div>
          <div className="h-4/6 px-6 py-6">
            <ArtistDashboardOptions />
          </div>
        </section>
        <section className={`${isEventActive ? "w-full md:w-4/12" : "hidden"}  px-4 py-5 bg-transparent`}>
          <Typography variant="h4" className="capitalize font-LatoBold text-lg text-gray-900">
            nominations
          </Typography>
          <ArtistNominationsAside />
        </section>
      </div>
    </ArtistLayout>
  );
};

export default ArtistDashboardPage;
