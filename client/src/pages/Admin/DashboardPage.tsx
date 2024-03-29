import { Typography } from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import SummaryCard from "../../components/Cards/SummaryCard";
import useFetch from "../../hooks/useFetch";
import LoadingSummaryCard from "../../components/Loading/LoadingSummaryCard";
import AdminHomeBarChart from "../../components/Charts/AdminHomeBarChart";

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
          <Typography variant="h6">Admin Dashboard</Typography>
          <Typography className="text-base font-LatoRegular">
            {dateToday()}
          </Typography>
        </section>

        {/* Summary Cards */}
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
          ) : (
            (summaryCountError == null && summaryCountData !== null) ?
            Object.keys(summaryCountData).map((key) => (
              <SummaryCard key={key} count={summaryCountData[key as keyof SummaryCount]} title={key} type={key} />
            )) : (
              <>
            <LoadingSummaryCard />
            <LoadingSummaryCard />
            <LoadingSummaryCard />
            <LoadingSummaryCard />
            <LoadingSummaryCard />
            <LoadingSummaryCard />
            </>
            )
          )}
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
