import { NavLink } from "react-router-dom";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import {
  LuHome,
  LuLogOut,
  LuMusic2,
  LuSettings,
  LuTrophy,
  LuUser2,
} from "react-icons/lu";
import Logo from "/logo.png";

// Active Link Styling
export function handleActiveAdminLinkColor(state: boolean) {
  if (state) {
    return {
      color: "#242424",
      backgroundColor: "#F0F0F0",
      borderRadius: "0px",
    };
  } else {
    return {
      color: "#4a5568",
    };
  }
}

const ArtistSidebar = () => {
  return (
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl">
      <div>
        <NavLink
          className="flex items-center justify-start"
          to="/artist/dashboard"
        >
          <img
            src={Logo}
            alt="bongo music awards logo"
            className="text-sm w-20"
          />
        </NavLink>
      </div>
      <div className="pt-2 h-full flex flex-col justify-between">
        <List className="space-y-1">
          <NavLink to="/artist/dashboard" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuHome className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                dashboard
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/artist/songs" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuMusic2 className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                songs
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/artist/nominations" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuTrophy className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                nominations
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/artist/profile" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuUser2 className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                profile
              </Typography>
            </ListItem>
          </NavLink>
        </List>
        <List>
          <NavLink to="/artist/settings" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuSettings className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                settings
              </Typography>
            </ListItem>
          </NavLink>
          <NavLink to="/login" style={({ isActive }) => handleActiveAdminLinkColor(isActive)} className="hover:bg-yellow-50">
            <ListItem className="bg-transparent py-1 pl-0 group">
              <ListItemPrefix className="text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                <LuLogOut className="text-lg" />
              </ListItemPrefix>
              <Typography className="capitalize text-sm font-LatoBold text-gray-900 group-hover:text-yellow-400 transition ease-linear">
                logout
              </Typography>
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Card>
  );
};

export default ArtistSidebar;
