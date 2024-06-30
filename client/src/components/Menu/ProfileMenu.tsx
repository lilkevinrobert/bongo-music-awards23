import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface ProfileMenuProps {
  profileAddress: string;
}

const ProfileMenu = ( { profileAddress }:ProfileMenuProps ) => {
  const imgLink =
    "https://images.unsplash.com/photo-1513152697235-fe74c283646a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww";

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          size="sm"
          variant="circular"
          withBorder={true}
          alt="DP"
          className="cursor-pointer border-gray-700 text-xs text-center font-LatoRegular rounded-full"
          src={imgLink}
        />
      </MenuHandler>
      <MenuList className="py-2 pr-4">
        <MenuItem>
          <NavLink to={profileAddress} className="flex items-center gap-2 group">
          <FaRegCircleUser className="text-lg text-slate-500 transition ease-in-out group-hover:text-slate-900" />

          <Typography
            variant="small"
            className="text-md text-slate-500 font-LatoRegular capitalize transition ease-in-out group-hover:text-slate-900"
          >
            Profile
          </Typography>
          </NavLink>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 group">
          <MdLogout className="text-lg text-slate-500 transition ease-in-out group-hover:text-slate-900" />
          <Typography
            variant="small"
            className="text-md text-slate-500 font-LatoRegular capitalize transition ease-in-out group-hover:text-slate-900"
          >
            logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
