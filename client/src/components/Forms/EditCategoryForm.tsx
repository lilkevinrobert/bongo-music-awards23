import { Button, Card, CardBody, CardHeader, CardFooter, Typography } from "@material-tailwind/react";
import { BiSubdirectoryRight } from "react-icons/bi";
import { IGenre } from "../Genre/Genres";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface FormProps {
  closeModal: () => void;
  fetchData: () => void;
  genre: IGenre | null;
  categoryGenre: string;
}

const EditCategoryForm = ({ closeModal, genre, categoryGenre, fetchData }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [categoryData, setCategoryData] = useState(genre)
  // console.log(categoryData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    axios
      .patch(`${BASE_URL}/categories/${categoryData?.id}`, {
        name: categoryData?.name,
      })
      .then((response) => {
        if (response.status == 200) {
          fetchData(); // Ref-fetch data after save
          toast.success("Category Updated Successfully");
          // setTimeout(() => window.location.reload(), 3000);
        } else {
          toast.error("Failed to Update Category.");
        }
      })
      .catch(() => {
        toast.error("Failed to Update Category.");
      });
  };

  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardHeader className="shadow-none pt-4 px-2">
        <Typography
          variant="h4"
          className="text-2xl capitalize font-LatoBold text-gray-900"
        >
          Edit Category
        </Typography>
        <div className="text-sm text-gray-800 flex items-center capitalize">
          <BiSubdirectoryRight className="text-2xl" />
          <Typography className="bg-yellow-200 px-4 py-1 rounded-r-full font-LatoRegular">in ~ {`${categoryGenre}`}</Typography>
        </div>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">name</Typography>
          <input
            type="text"
            name="name"
            value={categoryData?.name}
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            placeholder="Name of Sponsor"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        </CardBody>
        <CardFooter className="flex flex-row items-center justify-end gap-1">
          <Button
            size="md"
            onClick={closeModal}
            className="capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold rounded-full"
          >
            cancel
          </Button>
          <Button
            type="submit"
            size="md"
            className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
          >
            save changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditCategoryForm;
