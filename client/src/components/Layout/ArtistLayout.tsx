import React, { ReactNode } from "react";
import ArtistSidebar from "../navbar/ArtistSidebar.tsx";
import ProfileMenu from "../Menu/ProfileMenu.tsx";
interface LayoutProps {
  children: ReactNode;
}
const ArtistLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-full bg-slate-50 flex flex-row">
      <div className="bg-transparent w-full">
        <div className="bg-transparent flex flex-row items-center justify-between">
          <ArtistSidebar />
          <div className="mx-1 md:mx-2 lg:mx-3">
          <ProfileMenu profileAddress="/artist/profile" />
          </div>
        </div>
      <section className="w-full bg-transparent">{children}</section>
      </div>
    </div>
  );
};

export default ArtistLayout;
