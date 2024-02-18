import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout.tsx";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import ArtistsDataTable from "../../components/Table/ArtistsDataTable.tsx";

const ArtistsPage = () => {
  return (
    <Layout>
      <div className=" text-slate-900 pb-2">
        <Breadcrumbs separator="-">
          <NavLink to="../dashboard" className="opacity-60 pr-2">
            <AiFillHome className="text-lg" />
          </NavLink>
          <NavLink to="../dashboard" className="opacity-60 px-2">
            <Typography className="capitalize font-LatoRegular text-gray-500">home</Typography>
          </NavLink>
          <Typography className="px-2 font-LatoRegular text-gray-300">Artists</Typography>
        </Breadcrumbs>
      </div>
      <div className="text-slate-900 px-4">
        <Typography variant="h4">Artists</Typography>
        <ArtistsDataTable />
      </div>
    </Layout>
  );
};

export default ArtistsPage;
