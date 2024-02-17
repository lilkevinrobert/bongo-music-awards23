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
      <div className="text-slate-950 px-4">
        <section className="py-2 flex flex-row items-center justify-between">
          <Typography variant="h6">Admin Dashboard</Typography>
          <Typography className="text-base font-LatoRegular">{ dateToday() }</Typography>
        </section>

        {/* Summary Cards */}
        <div className="flex items-center gap-4 py-4">
          <SummaryCard count={355} title="users" type="users" />
          <SummaryCard count={2} title="active events" type="events" />
          <SummaryCard count={15} title="genres" type="genres" />
          <SummaryCard count={57} title="categories" type="categories" />
          <SummaryCard count={94} title="nominators" type="nominators" />
          <SummaryCard count={242} title="artists" type="artists" />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
