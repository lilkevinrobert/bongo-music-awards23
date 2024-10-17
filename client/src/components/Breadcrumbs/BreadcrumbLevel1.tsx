import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import { RxSlash } from "react-icons/rx";
import ProfileMenu from "../Menu/ProfileMenu";
import AdminMobileSidebar from "../navbar/AdminMobileSidebar";
import ArtistMobileSidebar from "../navbar/ArtistMobileSidebar";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcrumbLevel1Props {
  currentPage: string;
  user: "admin" | "artist" | "judge";
  separator?: "slash" | "arrow" | undefined;
  showProfileMenu?: "yes" | "no";
}

const BreadcrumbLevel1 = ({
  currentPage,
  user,
  separator,
  showProfileMenu,
}: BreadcrumbLevel1Props) => {
  // some props handlers 
  const mobileSidebarHandler = (type: string) => {
    switch (type) {
      case "admin":
        return <AdminMobileSidebar />;
      case "artist":
        return <ArtistMobileSidebar />;
    }
  };
  const separatorHandler = (name: string | undefined) => {
    switch(name) {
      case "arrow":
        return <IoIosArrowForward />;
      default:
        return <RxSlash />
    }
  }
  return (
    <div className="top-0 sticky z-[1035] pb-0 flex flex-row items-center justify-between bg-white text-slate-900">
      <div className="self-baseline flex flex-row items-center mt-2">
        <div className="lg:hidden">{mobileSidebarHandler(user)}</div>
        <Breadcrumbs separator={separatorHandler(separator)}>
          <NavLink to="../dashboard" className="opacity-60 pr-2">
            <AiFillHome className="text-md" />
          </NavLink>
          <Typography className="px-2 font-LatoRegular text-gray-600 capitalize text-sm">
            {currentPage}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className={`${showProfileMenu == "no" && "hidden"} py-2 pr-4`}>
        <ProfileMenu profileAddress={`/${user}/profile`} />
      </div>
    </div>
  );
};

export default BreadcrumbLevel1;
