import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";
import ProfileMenu from "../Menu/ProfileMenu";

interface BreadcrumbLevel2Props {
    previousPage: string;
    currentPage: string;
}

const BreadcrumbLevel2 = ({ previousPage, currentPage }:BreadcrumbLevel2Props) => {
    const navigate = useNavigate();
  return (
    <div className=" text-slate-900 pb-2 flex flex-row items-center justify-between">
      <div className="self-baseline">
      <Breadcrumbs separator="/">
        <NavLink to="../dashboard" className="opacity-60 pr-2">
          <AiFillHome className="text-md" />
        </NavLink>
        <Typography onClick={() => navigate(-1)} className="px-2 font-LatoRegular text-gray-600 capitalize text-sm">
          { previousPage }
        </Typography>
        <Typography className="px-2 font-LatoRegular text-gray-600 capitalize text-sm">
          { currentPage }
        </Typography>
      </Breadcrumbs>
      </div>
      <div className="py-2 pr-4">
        <ProfileMenu />
      </div>
    </div>
  );
};

export default BreadcrumbLevel2;
