import { Typography } from "@material-tailwind/react";
import BreadcrumbLevel3 from "../../components/Breadcrumbs/BreadcrumbLevel3";
import MiniFooter from "../../components/Footer/MiniFooter";
import Layout from "../../components/Layout/Layout";
import AdminArtistNominations from "../../components/Nomination/AdminArtistNominations";

const ArtistNominationsPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel3
        initialPage="artists"
        previousPage="artist"
        currentPage="nominations"
      />
      {/* Nominations */}
      <div className="text-slate-900 px-4">
        <Typography variant="h4" className="text-lg font-LatoBold capitalize">
          artist nominations
        </Typography>
        <Typography variant="h4" className="text-lg font-LatoRegular capitalize">
          ~ Stage Name
        </Typography>

        <div className="my-2">
          <AdminArtistNominations />
        </div>
      </div>
      <MiniFooter />
    </Layout>
  );
};

export default ArtistNominationsPage;
