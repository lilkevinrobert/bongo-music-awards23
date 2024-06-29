import React, { ReactNode } from "react";
import AdminSidebar from "../navbar/AdminSidebar.tsx";
interface LayoutProps {
  children: ReactNode;
}
const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 flex flex-row">
      <AdminSidebar />
      <section className="w-full bg-white">{children}</section>
    </div>
  );
};

export default Layout;
