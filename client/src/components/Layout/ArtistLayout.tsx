import React, { ReactNode } from "react";
import ArtistSidebar from "../navbar/ArtistSidebar.tsx";
import ProfileMenu from "../Menu/ProfileMenu.tsx";
import Logo from "/logo.png";
import { NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}
const ArtistLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <div className="bg-transparent w-full h-auto">
        <div className="bg-transparent flex flex-row items-center justify-between">
          <ArtistSidebar />
          <NavLink to="/artist/dashboard" className="cursor-pointer">
            <img src={Logo} alt="bongo music awards logo" className="text-sm w-16" />
          </NavLink>
          <div className="mx-1 md:mx-2 lg:mx-6">
            <ProfileMenu profileAddress="/artist/profile" />
          </div>
        </div>
        <section className="w-full bg-transparent px-1 md:px-2 lg:px-6">{children}</section>
      </div>
    </div>
  );
};

export default ArtistLayout;
