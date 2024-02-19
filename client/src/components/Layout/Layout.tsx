import React, { ReactNode } from "react";
import AdminSidebar from "../navbar/AdminSidebar.tsx";
interface LayoutProps {
  children: ReactNode;
}
const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-white flex flex-row">
      <AdminSidebar />
      <section className="w-full bg-transparent">{children}</section>
    </div>
  );
};

export default Layout;
