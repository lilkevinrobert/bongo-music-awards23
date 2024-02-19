import Layout from "../../components/Layout/Layout.tsx";
import { Typography } from "@material-tailwind/react";
import ArtistsDataTable from "../../components/Table/ArtistsDataTable.tsx";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1.tsx";

const ArtistsPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="artists" />
      <div className="text-slate-900 px-4">
        <Typography variant="h4">Artists</Typography>
        <ArtistsDataTable />
      </div>
    </Layout>
  );
};

export default ArtistsPage;
