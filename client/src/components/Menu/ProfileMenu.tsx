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

const ProfileMenu = () => {
  const imgLink =
    "https://images.unsplash.com/photo-1513152697235-fe74c283646a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww";

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          size="sm"
          variant="circular"
          withBorder={true}
          alt="profile_pic"
          className="cursor-pointer border-slate-300"
          src={imgLink}
        />
      </MenuHandler>
      <MenuList className="py-2">
        <MenuItem className="flex items-center gap-2 group">
          <FaRegCircleUser className="text-lg text-slate-500 group-hover:text-slate-900" />

          <Typography
            variant="small"
            className="text-md text-slate-500 font-LatoRegular capitalize"
          >
            My Profile
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <MdLogout className="text-lg text-slate-500" />
          <Typography
            variant="small"
            className="text-md text-slate-500 font-LatoRegular capitalize"
          >
            logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
