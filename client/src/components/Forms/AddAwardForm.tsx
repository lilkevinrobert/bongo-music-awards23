import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

interface FormProps {
  closeModal: () => void;
}

export interface File {
  name: string;
  size: number;
}

export type Inputs = {
  poster_image_url: File;
  location: string;
  title: string;
}

// Validation Schema
const schema = yup.object().shape({
  poster_image_url: yup.mixed<File>().required("Poster image is required."),
  location: yup.string().required("Award Event Location is required."),
  title: yup.string().required("Award title is required."),
})

const AddAwardForm = ({ closeModal }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    const processingToastId = toast.loading("Processing...");
    const modified_data = {
      title: data.title,
      location: data.location,
      poster_image_url: data.poster_image_url[0]
    }
    axios
      .post(`${BASE_URL}/awards`, modified_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("Award created successfully.");

          setTimeout(() => {
            toast.dismiss(responseToastId);
            window.location.reload();
          }, 3000);
        }
      })
      .catch((e) => {
        const messages: any = Object.values(e.response.data.message);

        let allErrors = messages
          .flatMap((item: any) => item) // flatten the array of messages
          .join("\n"); // join all messages with a new line separator

        toast.error(allErrors, {
          style: {
            whiteSpace: "pre-line", // ensure new lines are rendered properly
            backgroundColor: "#f56565",
            color: "#fff",
            fontWeight: "bold",
            padding: "16px auto",
            borderRadius: "8px",
          },
        });

        toast.dismiss(processingToastId);
      });
  }
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between my-4 font-semibold">
            <Typography variant="h4" className="text-2xl capitalize font-LatoBold text-gray-900">
              New Awards Event
            </Typography>
            <div className="bg-gray-100 rounded">
              <MdClose
                className="w-6 h-6 cursor-pointer rounded transition ease-in-out hover:bg-slate-800 hover:text-white"
                onClick={closeModal}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">title</Typography>
            <input type="text"
              className={`w-full h-[2rem] border ${errors.title ? 'border-red-500' : 'border-gray-300'
                } font-LatoRegular text-sm rounded`} placeholder="Name of Award Event"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <ErrorFormField message={`${errors.title?.message}`} />
            )}
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">location</Typography>
            <input type="text"
              className={`w-full h-[2rem] border ${errors.location ? 'border-red-500' : 'border-gray-300'
                } font-LatoRegular text-sm rounded`} placeholder="Enter a Location"
              {...register("location", { required: true })} />
            {errors.location && (
              <ErrorFormField message={`${errors.location?.message}`} />
            )}
          </div>
          {/* <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">date</Typography>
                <input type="date" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" placeholder="Enter a date" />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">time</Typography>
                <input type="time" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" placeholder="Enter a date" />
            </div> */}
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">poster</Typography>
            <Controller
              name="poster_image_url"
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <input
                  name="image"
                  type="file"
                  className={`w-full border ${
                    errors.poster_image_url ? 'border-red-500' : 'border-gray-300'
                  } font-LatoRegular text-sm rounded`}                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => onChange(e.target.files)}
                  onBlur={onBlur}
                  multiple={false}
                />
              )}
            />
            {errors.poster_image_url && (
              <ErrorFormField message={`${errors.poster_image_url?.message}`} />
            )}
          </div>

          <Button size="md" type="submit" className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold">create</Button>
        </CardBody>
        {/* Toaster */}
        <Toaster position="top-center" containerClassName="font-LatoRegular" />
      </form>
    </Card>
  );
};

export default AddAwardForm;
