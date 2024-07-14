import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import AddGenreForm from "../../components/Forms/AddGenreForm";
import Genres from "../../components/Genre/Genres";

const GenresPage = () => {
  const [openAddGenre, setOpenAddGenre] = useState(false);
  const handleOpenAddGenre = () => setOpenAddGenre((cur) => !cur);
  return (
    <>
      <Layout>
        <BreadcrumbLevel1 currentPage="genres" />
        <div className="text-slate-900 px-4">
          <div className="flex flex-row items-center justify-between">
            <Typography
              variant="h4"
              className="text-xl font-LatoBold capitalize"
            >
              genres
            </Typography>
            <Button
              size="sm"
              onClick={handleOpenAddGenre}
              className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
            >
              <IoAdd className="text-lg" /> new
            </Button>
          </div>
          <div>
            <div className="py-2">
              <Genres />
            </div>
          </div>
        </div>

        {/* Dialogs */}
        <Dialog
          size="md"
          open={openAddGenre}
          handler={handleOpenAddGenre}
          className="bg-transparent shadow-none"
        >
          <AddGenreForm closeModal={handleOpenAddGenre} />
        </Dialog>
      </Layout>
    </>
  );
};

export default GenresPage;
