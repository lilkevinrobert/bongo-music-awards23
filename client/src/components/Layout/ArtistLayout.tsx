import React, { ReactNode } from "react";
import ArtistSidebar from "../navbar/ArtistSidebar.tsx";

interface LayoutProps {
  children: ReactNode;
}
const ArtistLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <div className="text-black w-auto lg:w-80 bg-transparent h-[100vh] sticky top-0 hidden lg:flex flex-col items-center justify-normal bg-red-500 shadow">
        <ArtistSidebar />
      </div>
      <section className="w-full bg-transparent px-1 md:px-2 lg:px-6">
        {children}
      </section>
    </div>
  );
};

export default ArtistLayout;
