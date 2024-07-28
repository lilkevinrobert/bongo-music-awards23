import {
  Button,
  Dialog,
  DialogBody,
  Typography,
} from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import AdminAwardsTabs from "../../components/Tabs/AdminAwardsTabs";
import { MdOutlineSearch } from "react-icons/md";
import SearchDialog from "../../components/Dialog/SearchDialog";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import AddAwardForm from "../../components/Forms/AddAwardForm";

const AdminAwardsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [openNewAward, setOpenNewAward] = useState(false);
  const handleOpenNewAward = () => setOpenNewAward(!openNewAward);
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="awards" user="admin" />
      <div className="px-4 text-slate-900">
        <div className="flex flex-row items-center justify-between">
          <Typography variant="h4" className="font-LatoBold text-xl">
            Awards
          </Typography>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={handleOpenNewAward}
              className="flex flex-row items-center gap-3 rounded-full bg-gray-800 font-LatoRegular capitalize transition ease-in-out hover:bg-yellow-300 hover:text-gray-900"
            >
              <IoAdd className="text-lg" /> new
            </Button>
            <div
              onClick={handleOpen}
              className="flex cursor-pointer flex-row gap-2 rounded-full bg-yellow-200 px-4 py-1 transition ease-linear hover:bg-yellow-300"
            >
              <p className="font-LatoRegular capitalize">search</p>
              <MdOutlineSearch className="text-2xl text-gray-700" />
            </div>
          </div>
        </div>
        <div className="text-slate-600">
          <AdminAwardsTabs />
        </div>
      </div>
      {/* Dialogs */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="m-0 rounded-none bg-transparent"
      >
        <DialogBody className="flex items-center justify-center">
          <SearchDialog closeModal={handleOpen} />
        </DialogBody>
      </Dialog>
      <Dialog
        open={openNewAward}
        handler={handleOpenNewAward}
        className="bg-transparent shadow-none"
      >
        <DialogBody className="flex items-center justify-center">
        <AddAwardForm closeModal={handleOpenNewAward} />
        </DialogBody>
      </Dialog>
    </Layout>
  );
};

export default AdminAwardsPage;
