import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

interface FormProps {
  closeModal: () => void;
}

type Inputs = {
  name: string;
};

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required(),
});

const AddGenreForm = ({ closeModal }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    closeModal()
    const processingToastId = toast.loading("Processing...")
    axios
        .post(`${BASE_URL}/genres`, data)
        .then((res) => {
          if (res.status == 201) {
            toast.dismiss(processingToastId)
            const responseToastId = toast.success("Genre created successfully.")
            setTimeout(()=>{
              toast.dismiss(responseToastId)
              window.location.reload()
            }, 3000)
          }
        })
        .catch(() => {
          toast.dismiss(processingToastId)
          toast.error("Failed to create.")});
  };
  return (
    <Card className="mx-auto max-h-[95vh] w-full max-w-[24rem] overflow-y-auto rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between uppercase">
            <Typography
              variant="h4"
              className="font-LatoBold text-xl capitalize text-gray-900"
            >
              New Genre
            </Typography>
          </div>
          <div className="my-4 w-full">
            <label
              htmlFor="firstname"
              className="block font-LatoBold text-sm capitalize text-gray-900"
            >
              Genre
            </label>
            <input
              type="text"
              className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular"
              placeholder="Enter Genre name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <ErrorFormField message={`Genre ${errors.name?.message}`} />
            )}
          </div>
          <div className="flex flex-row items-center justify-end gap-1">
            <Button
              size="sm"
              onClick={closeModal}
              className="h-10 rounded-full bg-transparent font-LatoBold capitalize text-gray-900 shadow-none transition ease-in-out hover:bg-gray-200"
            >
              cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              className="h-10 rounded-full bg-gray-900 font-LatoBold capitalize transition ease-in-out hover:bg-yellow-300 hover:text-gray-900"
            >
              create
            </Button>
          </div>
        </CardBody>
      </form>
    </Card>
  );
};

export default AddGenreForm;
