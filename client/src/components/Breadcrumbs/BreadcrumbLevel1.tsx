import { NavLink } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";

interface BreadcrumbLevel1Props {
    currentPage: string;
}

const BreadcrumbLevel1 = ({ currentPage }:BreadcrumbLevel1Props) => {
  return (
    <div className=" text-slate-900 pb-2">
      <Breadcrumbs separator="/">
        <NavLink to="../dashboard" className="opacity-60 pr-2">
          <AiFillHome className="text-lg" />
        </NavLink>
        <Typography className="px-2 font-LatoRegular text-gray-600 capitalize">
          { currentPage }
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbLevel1;
