import { MdOutlineAdd } from "react-icons/md";
import Layout from "../../components/Layout/Layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import { useEffect, useState } from "react";
import FetchingItems from "../../components/Spinner/FetchingItems";

const AdminCategoriesPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const handleOpenAddCategory = () => setOpenAddCategory((cur) => !cur);

  useEffect(() => {
    fetch(`${BASE_URL}/admin/categories`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLoading(!isLoading);
          setCategoriesList(data);
        }
      });
  }, [BASE_URL, isLoading]);

  return (
    <>
      <Layout>
        <div className="w-full text-black flex flex-row">
          <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
            <div className="px-0">
              <div className="flex flex-row items-center justify-between">
                <Typography variant="h5" className="">
                  Categories
                </Typography>
                <Button
                  className="hidden items-center gap-2 bg-yellow-400"
                  onClick={handleOpenAddCategory}
                >
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
                  <AddEmptyState itemName="category" />
                )}
              </div>
            </div>
          </section>
        </div>
        <Dialog
          size="md"
          open={openAddCategory}
          handler={handleOpenAddCategory}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Sign In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to Sign In.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input label="Email" size="lg" crossOrigin={undefined} />
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input label="Password" size="lg" crossOrigin={undefined} />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" crossOrigin={undefined} />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                onClick={handleOpenAddCategory}
                fullWidth
              >
                Sign In
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpenAddCategory}
                >
                  Sign up
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </Dialog>
      </Layout>
    </>
  );
};

export default AdminCategoriesPage;
