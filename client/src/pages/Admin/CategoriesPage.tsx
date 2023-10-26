import React from "react";
import Layout from "../../components/Layout/Layout";
import { Typography } from "@material-tailwind/react";

const AdminCategoriesPage = () => {
  return (
    <Layout>
      <div className="w-full text-black flex flex-row">
        <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
          <Typography variant="h5">Categories</Typography>
        </section>
      </div>
    </Layout>
  );
};

export default AdminCategoriesPage;
