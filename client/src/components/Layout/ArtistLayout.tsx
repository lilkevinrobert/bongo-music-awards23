import React, { ReactNode } from "react";
import ArtistSidebar from "../navbar/ArtistSidebar.tsx";
import { Typography } from "@material-tailwind/react";
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
          <ProfileMenu />
        </div>
      <section className="w-full bg-transparent">{children}</section>
      </div>
    </div>
  );
};

export default ArtistLayout;
