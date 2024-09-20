import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

interface FormProps {
  closeModal: () => void;
}

export interface File {
  name: string;
  size: number;
}

export type Inputs = {
  sponsor_name: string;
  link: string;
  award: { value: string };
  sponsor_logo: File;
}

// Validation Schema
const schema = yup.object().shape({
  sponsor_logo: yup.mixed<File>().required("Sponsor logo is required."),
  sponsor_name: yup.string().required("Sponsor's name is required"),
  link: yup.string().required("Sponsor's name is required"),
  award: yup.object({
    value: yup.string().required("Please select an award."),
  }),
})

const AddSponsorForm = ({ closeModal }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // let modified_gender = data.gender.value
    let modified_data = {
      sponsor_name: data.sponsor_name,
      link: data.link,
      award_id: data.award.value,
      // sponsor_logo: data.sponsor_logo[0], should be passed like so
      logo: data.sponsor_logo[0],
    };
    const processingToastId = toast.loading("Processing...");

    axios
      .post(`${BASE_URL}/sponsors`, modified_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("Sponsor created successfully.");

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
  };

  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between my-4 font-semibold">
            <Typography
              variant="h4"
              className="text-2xl capitalize font-LatoBold text-gray-900"
            >
              New Sponsor
            </Typography>
            <div className="bg-gray-100 rounded">
              <MdClose
                className="w-6 h-6 cursor-pointer rounded transition ease-in-out hover:bg-slate-800 hover:text-white"
                onClick={closeModal}
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">name</Typography>
            <input
              type="text"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
              placeholder="Name of Sponsor"
              {...register("sponsor_name", { required: true })}
            />
            {errors.sponsor_name && (
              <ErrorFormField message={`${errors.sponsor_name?.message}`} />
            )}
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">link</Typography>
            <input
              type="text"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
              placeholder="Enter sponsor's link"
              {...register("link", { required: true })}
            />
            {errors.link && (
              <ErrorFormField message={`${errors.link?.message}`} />
            )}
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">Sponsoring Award</Typography>
            <Controller
              name="award"
              control={control}
              render={({ field }) => {
                return (
                  <Select
                    {...field}
                    options={[
                      { value: "2", label: "INitialization" },
                    ]}
                    className="font-LatoRegular w-full"
                    placeholder="Select Award"
                  />
                );
              }}
            />
            {errors.award?.value?.message && (
              <ErrorFormField message={`${errors.award?.value?.message}`} />
            )}
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">logo</Typography>
            <Controller
              name="sponsor_logo"
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <input
                  name="image"
                  type="file"
                  className="w-full h-full border border-gray-300 font-LatoRegular text-sm rounded"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => onChange(e.target.files)}
                  onBlur={onBlur}
                  multiple={false}
                />
              )}
            />
            {errors.sponsor_logo && (
              <ErrorFormField message={`${errors.sponsor_logo?.message}`} />
            )}
          </div>
          <Button
            size="md"
            type="submit"
            className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold rounded-full"
          >
            add sponsor
          </Button>
        </CardBody>
        {/* Toaster */}
        <Toaster position="top-center" containerClassName="font-LatoRegular" />
      </form>
    </Card>
  );
};

export default AddSponsorForm;
