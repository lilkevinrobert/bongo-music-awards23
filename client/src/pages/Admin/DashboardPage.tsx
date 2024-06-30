import { Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import SummaryCard from "../../components/Cards/SummaryCard";
import useFetch from "../../hooks/useFetch";
import LoadingSummaryCard from "../../components/Loading/LoadingSummaryCard";
import AdminHomeBarChart from "../../components/Charts/AdminHomeBarChart";
import AdminMobileSidebar from "../../components/navbar/AdminMobileSidebar";
import ProfileMenu from "../../components/Menu/ProfileMenu";

interface SummaryCount {
  users: number;
  active_events: number;
  genres: number;
  categories: number;
  artists: number;
}

const AdminDashboardPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const {
    data: summaryCountData,
    loading: summaryCountLoading,
    error: summaryCountError,
  } = useFetch<SummaryCount>(`${BASE_URL}/admin/counts`);

  const dateToday = () => {
    const date = new Date();
    return date.toDateString();
  };

  return (
    <Layout>
      <div className="text-slate-950 px-4">
        <section className="py-2 flex flex-row items-center justify-between">
          <div className="flex items-center gap-1">
            <AdminMobileSidebar />
            {/* <Typography variant="h6">Admin Dashboard</Typography> */}
          </div>
          <div className="flex items-center gap-2">
            <Typography className="text-base text-gray-500 font-LatoRegular">
              {dateToday()}
            </Typography>
            <ProfileMenu profileAddress="/admin/profile" />
          </div>
        </section>

        {/* Summary Cards */}
        <div>
          <h3 className="capitalize text-gray-700 text-lg pl-1">overview</h3>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6 py-4">
            {summaryCountLoading ? (
              <>
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
              </>
            ) : summaryCountError == null && summaryCountData !== null ? (
              Object.keys(summaryCountData).map((key) => (
                <SummaryCard
                  key={key}
                  count={summaryCountData[key as keyof SummaryCount]}
                  title={key}
                  type={key}
                />
              ))
            ) : (
              <>
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
                <LoadingSummaryCard />
              </>
            )}
          </div>
        </div>

        {/* Chart & Recents */}
        <div className="grid grid-cols-2 my-4 h-96 bg-transparent">
          <AdminHomeBarChart />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboardPage;
