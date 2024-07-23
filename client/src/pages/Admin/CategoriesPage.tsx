import Layout from "../../components/Layout/Layout";
import {
  Button,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import AddCategoryForm from "../../components/Forms/AddCategoryForm";
import Categories from "../../components/Category/Categories";

const AdminCategoriesPage = () => {
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const handleOpenAddCategory = () => setOpenAddCategory((cur) => !cur);

  return (
    <>
      <Layout>
        <BreadcrumbLevel1 currentPage="categories" user='admin' />
        <div className="text-slate-900 px-4">
          <div className="flex flex-row items-center justify-between">
            <Typography variant="h4" className="text-xl font-LatoBold capitalize">
              Categories
            </Typography>
            <Button
                  size="sm"
                  onClick={handleOpenAddCategory}
                  className="capitalize rounded-full flex flex-row items-center gap-3 font-LatoRegular bg-gray-800 hover:bg-yellow-300 hover:text-gray-900 transition ease-in-out"
                >
                  <IoAdd className="text-lg" /> new
                </Button>
          </div>
          <div>
            <div className="py-2">
              <Categories />
            </div>
          </div>
        </div>
        <Dialog
          size="md"
          open={openAddCategory}
          handler={handleOpenAddCategory}
          className="bg-transparent shadow-none"
        >
          <AddCategoryForm closeModal={handleOpenAddCategory} />
        </Dialog>
      </Layout>
    </>
  );
};

export default AdminCategoriesPage;
