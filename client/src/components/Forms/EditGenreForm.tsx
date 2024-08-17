import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { IGenre } from "../Genre/Genres";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface FormProps {
  closeModal: () => void;
  fetchData: () => void;
  genre: IGenre | null;
}

interface FormData {
  id: any;
  name: string;
}

const EditGenreForm = ({ closeModal, fetchData, genre }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [genreData, setGenreData] = useState<FormData | null>(genre);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGenreData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .patch(`${BASE_URL}/genres/${genreData?.id}`, {
        name: genreData?.name,
      })
      .then((response) => {
        if (response.status == 200) {
          closeModal();
          fetchData(); // Ref-fetch data after save
          toast.success("Genre Updated Successfully");
          // setTimeout(() => window.location.reload(), 3000);
        } else {
          closeModal();
          toast.error("Failed to Update Genre.");
        }
      })
      .catch(() => {
        closeModal();
        toast.error("Failed to Update Genre.");
      });
  };

  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardHeader className="px-2 py-4 shadow-none">
          <Typography
            variant="h4"
            className="font-LatoBold text-2xl capitalize text-gray-900"
          >
            Edit Genre
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">name</Typography>
            <input
              type="text"
              value={genreData?.name}
              name="name"
              className="h-[2rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
              placeholder="Name of Genre"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </CardBody>
        <CardFooter className="flex flex-row items-center justify-end gap-1">
          <Button
            size="md"
            onClick={closeModal}
            className="rounded-full bg-transparent font-LatoBold capitalize text-gray-900 shadow-none transition ease-in-out hover:bg-gray-200"
          >
            cancel
          </Button>
          <Button
            type="submit"
            size="md"
            className="rounded-full font-LatoRegular capitalize transition ease-in-out hover:bg-yellow-300 hover:font-LatoBold hover:text-gray-900"
          >
            save changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditGenreForm;
