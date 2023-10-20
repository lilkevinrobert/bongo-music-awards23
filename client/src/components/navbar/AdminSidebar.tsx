import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
} from "@material-tailwind/react";
import {
  MdDashboard,
  MdCategory,
  MdPerson4,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";

const AdminSidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const openSidebarHandler = () => setOpenSidebar(!openSidebar)
  return (
    <>
      <Card className={`h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 z-20`}>
        <div className="mb-2 p-4 flex flex-row items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Bongo Music Awards
          </Typography>
          <MdKeyboardDoubleArrowRight className="w-8 h-8 lg:hidden" onClick={openSidebarHandler} />
        </div>
        <List>
          <ListItem className="gap-2 py-4 px-2">
            <ListItemPrefix>
              <MdDashboard className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className="gap-2 py-4 px-2">
            <ListItemPrefix>
              <MdCategory className="h-5 w-5" />
            </ListItemPrefix>
            Categories
          </ListItem>
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
