import { Typography } from "@material-tailwind/react";
import { IResults } from "../Dialog/SearchDialog";
import { LuChevronRight } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const SearchResultCard = ({
  id,
  location,
  title,
  status
}: IResults) => {
  return (
    <NavLink to={`/admin/awards/${id}`}>
      <div className="group flex items-center justify-between rounded border-b bg-white px-6 py-2 shadow transition ease-linear hover:bg-gray-100">
        <div>
          <Typography className="flex items-center gap-2 font-LatoBold text-base text-gray-900">
            <div
              className={`h-2 w-2 rounded-full ${status === "ACTIVE" ? "bg-green-400" : "bg-red-400"}`}
            ></div>
            {title}
          </Typography>
          <div className="hidden items-center gap-2 md:flex">
            {/* <Typography className="font-LatoRegular text-sm text-gray-900">
              {date}
            </Typography> */}
            <Typography className="font-LatoRegular text-sm text-gray-900">
              {location}
            </Typography>
          </div>
        </div>
        <LuChevronRight className="text-base text-gray-500 group-hover:text-gray-900" />
      </div>
    </NavLink>
  );
};

export default SearchResultCard;
