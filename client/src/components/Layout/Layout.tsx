import React from "react";
import AdminSidebar from "../Navbar/AdminSidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full bg-slate-50 flex flex-row">
      <AdminSidebar />
      <section className="w-full bg-transparent">{children}</section>
    </div>
  );
};

export default Layout;
