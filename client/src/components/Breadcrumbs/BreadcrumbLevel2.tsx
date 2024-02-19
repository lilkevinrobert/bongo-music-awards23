import { NavLink, useNavigate } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { AiFillHome } from "react-icons/ai";

interface BreadcrumbLevel2Props {
    previousPage: string;
    currentPage: string;
}

const BreadcrumbLevel2 = ({ previousPage, currentPage }:BreadcrumbLevel2Props) => {
    const navigate = useNavigate();
  return (
    <div className=" text-slate-900 pb-2">
      <Breadcrumbs separator="/">
        <NavLink to="../dashboard" className="opacity-60 pr-2">
          <AiFillHome className="text-lg" />
        </NavLink>
        <Typography onClick={() => navigate(-1)} className="px-2 font-LatoRegular text-gray-600 capitalize">
          { previousPage }
        </Typography>
        <Typography className="px-2 font-LatoRegular text-gray-600 capitalize">
          { currentPage }
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbLevel2;
