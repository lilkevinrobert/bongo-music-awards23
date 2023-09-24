import React from "react";
import AdminNavBar from "../../components/Navbar/AdminNavBar";
import ProfilePic from "../../assets/react.svg";
import { CgProfile } from "react-icons/cg";
import SummaryCard from "../../components/Cards/SummaryCard";

const AdminDashboard = () => {
  return (
    <div className="bg-slate-50 font-LatoRegular">
      <AdminNavBar />
      <section className="flex flex-row items-center justify-between p-6 md:p-16">
        <div className="flex flex-row items-center gap-4">
          <img
            src={ProfilePic}
            alt="Profile_pic"
            className="w-20 h-20 rounded-full bg-yellow-200"
          />
          <div className="flex flex-col text-slate-900">
            <h2 className="font-LatoBold">Bakari Mwamnyeto</h2>
            <h3 className="text-slate-400">Administrator</h3>
          </div>
        </div>
        <CgProfile className="text-yellow-200 w-6 h-6" />
      </section>
      <section className="w-full bg-slate-50 flex flex-row gap-2 md:gap-4 p-6 md:px-16">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </section>
    </div>
  );
};

export default AdminDashboard;
