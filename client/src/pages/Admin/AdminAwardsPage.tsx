import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import AdminAwardsTabs from "../../components/Tabs/AdminAwardsTabs";
import { MdOutlineSearch } from "react-icons/md";
import SearchDialog from "../../components/Dialog/SearchDialog";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";

const AdminAwardsPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="awards" />
      <div className="text-slate-900 px-4">
        <div className="flex flex-row items-center justify-between">
          <Typography variant="h4" className="text-xl font-LatoBold">
            Awards
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="sm" className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"><IoAdd className="text-lg" /> new</Button>
          
          <div
          onClick={handleOpen}
          className="bg-yellow-200 rounded-full py-1 px-4 flex flex-row gap-2 cursor-pointer hover:bg-yellow-300 transition ease-linear">
            <p className="font-LatoRegular capitalize">search</p>
          <MdOutlineSearch className="text-2xl text-gray-700" />
          </div>
          </div>
        </div>
        <div>
          <AdminAwardsTabs />
        </div>
      </div>
      <Dialog open={open} handler={handleOpen} className="bg-transparent m-0 rounded-none">
        <DialogBody className="flex items-center justify-center">
          <SearchDialog closeModal={handleOpen} />
        </DialogBody>
      </Dialog>
    </Layout>
  );
};

export default AdminAwardsPage;
