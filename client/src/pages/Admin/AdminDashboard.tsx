import React from "react";
import AdminNavBar from "../../components/Navbar/AdminNavBar";
import SummaryCard from "../../components/Cards/SummaryCard";
import Profile from "../../components/Profile/Profile";

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
    </div>
  );
};

export default AdminDashboard;
