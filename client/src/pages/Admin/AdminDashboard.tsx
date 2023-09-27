import React from "react";
import AdminNavBar from "../../components/Navbar/AdminNavBar";
import SummaryCard from "../../components/Cards/SummaryCard";
import Profile from "../../components/Profile/Profile";
import InfoActionCard from "../../components/Cards/InfoActionCard";

const AdminDashboard = () => {
  return (
    <div className="bg-slate-50 font-LatoRegular">
      <AdminNavBar />
      <Profile />
      <section className="w-full bg-slate-50 flex flex-row gap-2 md:gap-4 p-6 md:px-16">
        <SummaryCard count={1} event="ongoing" />
        <SummaryCard count={2} event="upcoming"/>
        <SummaryCard count={0} event="awaiting" />
      </section>
      <section className="w-full p-6 md:px-16 bg-slate-50 grid grid-cols-3">
        <InfoActionCard />
      </section>
    </div>
  );
};

export default AdminDashboard;
