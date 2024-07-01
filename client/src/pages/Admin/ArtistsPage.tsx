import Layout from "../../components/Layout/Layout";
import { Typography } from "@material-tailwind/react";
import ArtistsDataTable from "../../components/Table/ArtistsDataTable";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";

const ArtistsPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="artists" />
      <div className="text-slate-900 px-4">
        <Typography variant="h4" className="text-lg font-LatoBold">Artists</Typography>
        <ArtistsDataTable />
      </div>
    </Layout>
  );
};

export default ArtistsPage;
