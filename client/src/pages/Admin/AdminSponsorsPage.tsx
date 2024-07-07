import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";
import AddSponsorForm from "../../components/Forms/AddSponsorForm";


const AdminSponsorsPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="sponsors" />
      <div className="px-4 text-slate-900 flex flex-row items-center justify-between">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          sponsors
        </Typography>
        <Button
              size="sm"
              onClick={handleOpen}
              className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
            >
              <IoAdd className="text-lg" /> new
            </Button>
      </div>

            {/* Dialogs */}
            <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent m-0 rounded-none"
      >
        <DialogBody className="flex items-center justify-center">
          {/* <SearchDialog closeModal={handleOpen} /> */}
          <AddSponsorForm closeModal={handleOpen} />
        </DialogBody>
      </Dialog>
    </Layout>
  );
};

export default AdminSponsorsPage;
