import { MdOutlineAdd } from "react-icons/md";
import Layout from "../../components/Layout/Layout";
import { Button, Typography } from "@material-tailwind/react";
import CategoryEmptyState from "../../components/EmptyState/CategoryEmptyState";
import { useEffect, useState } from "react";
import FetchingItems from "../../components/Spinner/FetchingItems";

const AdminCategoriesPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLoading(!isLoading);
          setCategoriesList(data);
        }
      });
  }, []);

  return (
    <Layout>
      <div className="w-full text-black flex flex-row">
        <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
          <div className="px-0">
            <div className="flex flex-row items-center justify-between">
              <Typography variant="h5" className="">
                Categories
              </Typography>
              <Button className="flex items-center gap-2 bg-yellow-400">
                <MdOutlineAdd className="w-4 h-4 text-slate-50" />
                <Typography className="text-sm font-LatoRegular">
                  Add Category
                </Typography>
              </Button>
            </div>
            <div className="w-full h-auto my-4 flex items-center justify-center">
              {isLoading ? (
                <FetchingItems />
              ) : categoriesList.length > 0 ? (
                <p>ok</p>
              ) : (
                <CategoryEmptyState />
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AdminCategoriesPage;
