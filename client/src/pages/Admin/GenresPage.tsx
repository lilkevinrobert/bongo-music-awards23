import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import Layout from "../../components/Layout/Layout";
import { FaMusic } from "react-icons/fa6";
import { MdAdd, MdClose, MdDelete, MdOutlineAdd } from "react-icons/md";
import { useEffect, useState, ChangeEvent } from "react";
import AddEmptyState from "../../components/EmptyState/AddEmptyState";
import FetchingItems from "../../components/Spinner/FetchingItems";
import toast, { Toaster } from "react-hot-toast";

type genreType = {
  genreName: string;
  categories: {
    categoryName: string;
  }[];
};

type categoriesType = {
  categoryName: string;
};

type genreData = {
  id: string;
  genreName: string;
}

const genreFormData: genreType = {
  genreName: "",
  categories: [
    {
      categoryName: "",
    },
  ],
};

const AdminGenresPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [genreList, setGenreList] = useState([]);
  const [genre, setGenre] = useState(genreFormData);
  const [inputFields, setInputFields] = useState([""]);

  // Add Genre Dialog
  const [openGenre, setOpenGenre] = useState(false);
  const handleOpenGenre = () => {
    setInputFields([""]);
    setOpenGenre(!openGenre);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/genres/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 0) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setGenreList(data);
        }
      });
  }, [BASE_URL, isLoading]);

  const handleGenreNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre({
      ...genre,
      genreName: e.target.value,
    });
  };

  const handleAddInputField = () => {
    // Create a new input field and add it to the state
    setInputFields([...inputFields, ""]);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setInputFields(newInputFields);
  };

  const handleDeleteInputField = (
    index: number,
    e: { preventDefault: () => void }
  ) => {
    e.preventDefault();
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const dataToCategories = (items: string[]) => {
    // Convert the array of items to an array of category objects
    const categoryObjects = items.map((item) => ({
      categoryName: item,
    }));

    return categoryObjects;
  };

  const removeEmptyCategories = (categories: categoriesType[]) => {
    // Filter out empty category objects
    const filteredCategories = categories.filter(
      (category) => category.categoryName.trim() !== ""
    );

    return filteredCategories;
  };

  function newGenreSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    const newData = dataToCategories(inputFields);
    const mergedCategories = [...genre.categories, ...newData];
    const cleanCategories = removeEmptyCategories(mergedCategories);

    const genreName = genre.genreName;

    const updatedGenre = {
      genreName: genreName,
      categories: cleanCategories,
    };

    if (updatedGenre == null) {
      handleOpenGenre();
      toast.error(<p className="capitalize">All fields are required</p>);
    } else {
      // Send to the server
      fetch(`${BASE_URL}/genres/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGenre),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success(<p className="capitalize">{`Genre Added Successfully`}</p>);
            window.setTimeout(() => window.location.reload(), 2000);
          } else {
            toast.error(<p className="capitalize">{`Operation Failed!`}</p>);
          }
        });

      handleOpenGenre();
    }
  }

  return (
    <>
      <Layout>
        <div className="w-full text-black flex flex-row">
          <section className="w-full pt-8 px-8 min-h-screen bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 scroll-m-10">
            <div className="px-0">
              <div className="flex flex-row items-center justify-between">
                <Typography variant="h5" className="">
                  Genres
                </Typography>
                <Button
                  className="flex items-center gap-2 bg-yellow-400"
                  onClick={handleOpenGenre}
                >
                  <MdOutlineAdd className="w-4 h-4 text-slate-50" />
                  <Typography className="text-sm font-LatoRegular">
                    Add Genre
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="w-full h-auto my-4 flex items-center justify-center">
              {isLoading === true ? (
                <FetchingItems />
              ) : genreList.length > 0 ? (
                <div className="w-full h-full grid grid-cols-4 gap-2 py-4">
                  {genreList.map((item: genreData) => {
                    const id = item.id;
                    const name = item.genreName;
                    return (
                      <Card key={id} className="group w-full h-32 rounded-md cursor-pointer hover:bg-slate-100">
                        <CardBody className="flex flex-row items-center justify-center gap-4">
                          <div className="flex items-center justify-center gap-4">
                          <FaMusic className="sm:w-8 sm:h-8 lg:w-20 lg:h-16" />
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2 capitalize"
                          >
                            { name }
                          </Typography>
                          </div>
                          <MdDelete className="hidden group-hover:block w-14 h-10 rounded-md cursor-pointer transition ease-in-out text-red-400 hover:bg-red-500 hover:text-white" />
                        </CardBody>
                        <CardFooter className="pt-0 hidden">
                          <Button className="bg-slate-600">View More</Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <AddEmptyState itemName="genre" />
              )}
            </div>
          </section>
        </div>
        <Toaster position="top-center" />
      </Layout>

      <Dialog
        size="xs"
        open={openGenre}
        handler={handleOpenGenre}
        className="bg-transparent shadow-none py-24"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="mx-auto w-full max-w-[24rem] rounded-md">
          <CardHeader className="bg-transparent shadow-none flex items-center justify-between py-4">
            <Typography variant="h4" color="blue-gray">
              New Genre
            </Typography>
            <MdClose
              className="w-8 h-8 cursor-pointer transition ease-in-out hover:bg-slate-200 hover:rounded-md"
              onClick={handleOpenGenre}
            />
          </CardHeader>
          <form>
            <CardBody className="flex flex-col gap-4 border py-4">
              <Typography className="-mb-2 font-LatoBold">Name</Typography>
              <Input
                size="lg"
                crossOrigin={undefined}
                name="genreName"
                onChange={handleGenreNameChange}
              />
              <Typography className="font-LatoBold">Categories</Typography>
              {inputFields.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Input
                    type="text"
                    value={value}
                    size="lg"
                    className="w-3/3"
                    onChange={(event) => {
                      handleInputChange(index, event);
                    }}
                    crossOrigin={undefined}
                  />
                  <Button
                    onClick={(e) => handleDeleteInputField(index, e)}
                    className="bg-slate-600"
                  >
                    <MdDelete className="w-6 h-6" />
                  </Button>
                </div>
              ))}
              <MdAdd
                className="w-8 h-8 text-slate-500 cursor-pointer rounded-md transition ease-in-out hover:bg-slate-200"
                onClick={handleAddInputField}
              />
            </CardBody>
            <CardFooter className="pt-4">
              {inputFields.length < 1 ? (
                <Button
                  variant="gradient"
                  onClick={handleOpenGenre}
                  fullWidth
                  disabled
                  className="bg-yellow-400 rounded-md"
                >
                  Create Genre
                </Button>
              ) : (
                <Button
                  variant="gradient"
                  fullWidth
                  className="bg-yellow-400 rounded-md"
                  onClick={newGenreSubmit}
                >
                  Create Genre
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default AdminGenresPage;
