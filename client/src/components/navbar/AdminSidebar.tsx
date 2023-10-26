import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  MdDashboard,
  MdCategory,
  MdPerson4,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const openSidebarHandler = () => setOpenSidebar(!openSidebar);
  return (
    <>
      <Card
        className={`h-screen w-5/12 max-w-[20rem] p-4 bg-slate-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100`}
      >
        <div className="mb-2 p-4 flex flex-row items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Bongo <span className="">Music Awards</span>
          </Typography>
          <MdKeyboardDoubleArrowRight
            className="w-8 h-8 lg:hidden"
            onClick={openSidebarHandler}
          />
        </div>
        <List>
          <NavLink to="/admin/dashboard">
          <ListItem className="gap-2 py-4 px-2">
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          </NavLink>
          <NavLink to="/admin/categories">
          <NavLink to="/admin/genres">
            <ListItem className="gap-2 py-4 px-2">
              <ListItemPrefix>
                <MdCategory className="h-5 w-5" />
              </ListItemPrefix>
              Genres
            </ListItem>
          </NavLink>
            <ListItem className="gap-2 py-4 px-2">
              <ListItemPrefix>
                <TbCategoryFilled className="h-5 w-5" />
              </ListItemPrefix>
              Categories
            </ListItem>
          </NavLink>
          <ListItem className="gap-2 py-4 px-2">
            <ListItemPrefix>
              <MdPerson4 className="h-5 w-5" />
            </ListItemPrefix>
            Artists
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          {/* <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem> */}
          <ListItem className="gap-2 py-4 px-2">
            <ListItemPrefix>
              <IoLogOut className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default AdminSidebar;
