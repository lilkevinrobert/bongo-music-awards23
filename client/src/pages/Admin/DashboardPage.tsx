import { Typography } from "@material-tailwind/react";
import { MdNotifications } from "react-icons/md";
import Layout from "../../components/Layout/Layout";
import UpcomingEvent from "../../components/Events/UpcomingEvent";
import SummaryCard from "../../components/Cards/SummaryCard";
import InfoActionCard from "../../components/Cards/InfoActionCard";

const AdminDashboardPage = () => {
  const dateToday = () => {
    const date = new Date();
    return date.toDateString()
  }
  return (
    <Layout>
      <div className="text-slate-950">
        <section className="p-2 flex flex-row items-center justify-between">
          <Typography variant="h6">Admin Dashboard</Typography>
          <Typography className="text-base font-LatoRegular">{ dateToday() }</Typography>
        </section>

        {/* Summary Cards */}
        <div>
          <SummaryCard count={25} event="event 1" />
          <SummaryCard count={25} event="event 1" />
          <SummaryCard count={25} event="event 1" />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
