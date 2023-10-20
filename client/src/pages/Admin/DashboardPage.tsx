import { Typography } from "@material-tailwind/react";
import AdminSidebar from "../../components/Navbar/AdminSidebar";
import Layout from "../../components/Layout/Layout";

const AdminDashboardPage = () => {
  return (
    <Layout>
      <div className="w-full text-black flex flex-row">
        <section className="w-8/12 min-h-screen bg-transparent">
          main section
        </section>
        <section className="w-4/12 min-h-screen p-10 bg-slate-100">
          <input
            type="search"
            name="search"
            className="w-full border border-slate-100 rounded-full shadow-sm pl-10 font-LatoRegular capitalize"
            placeholder="search here ..."
          />
        </section>
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
