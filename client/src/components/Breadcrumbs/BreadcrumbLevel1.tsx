import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import ProfileMenu from "../Menu/ProfileMenu";
import AdminMobileSidebar from "../navbar/AdminMobileSidebar";

interface BreadcrumbLevel1Props {
  currentPage: string;
  showProfileMenu?: "yes" | "no";
  user: "admin" | "artist";
}

const BreadcrumbLevel1 = ({ currentPage, user, showProfileMenu }: BreadcrumbLevel1Props) => {
  return (
    <div className="top-0 sticky z-[1035] pb-0 flex flex-row items-center justify-between bg-white text-slate-900">
      <div className="self-baseline flex flex-row items-center mt-2">
        <div className="lg:hidden">
          <AdminMobileSidebar />
        </div>
        <Breadcrumbs separator="/">
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
