import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import ProfileMenu from "../Menu/ProfileMenu";
import AdminMobileSidebar from "../navbar/AdminMobileSidebar";

interface BreadcrumbLevel3Props {
  initialPage: string;
  previousPage: string;
  currentPage: string;
}

const BreadcrumbLevel3 = ({
  initialPage,
  previousPage,
  currentPage,
}: BreadcrumbLevel3Props) => {
  const navigate = useNavigate();
  return (
    <div className=" text-slate-900 pb-0 flex flex-row items-center justify-between">
      <div className="self-baseline flex flex-row items-center mt-2">
        <div className="lg:hidden">
          <AdminMobileSidebar />
        </div>
        <Breadcrumbs separator="/">
          <NavLink to="../dashboard" className="opacity-60 pr-2">
            <AiFillHome className="text-md" />
          </NavLink>
          <Typography
            onClick={() => navigate(-1)}
            className="px-2 font-LatoRegular text-gray-600 capitalize text-sm"
          >
            {initialPage}
          </Typography>
          <Typography
            onClick={() => navigate(-1)}
            className="px-2 font-LatoRegular text-gray-600 capitalize text-sm"
          >
            {previousPage}
          </Typography>
          <Typography className="px-2 font-LatoRegular text-gray-600 capitalize text-sm">
            {currentPage}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="py-2 pr-4">
        <ProfileMenu profileAddress="/admin/profile" />
      </div>
    </div>
  );
};

export default BreadcrumbLevel3;
