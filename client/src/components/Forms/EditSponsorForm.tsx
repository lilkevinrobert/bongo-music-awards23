import { Button, Typography } from "@material-tailwind/react";
import { DataRow } from "../Table/SponsorsDataTable";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";

interface EditSponsorFormProps {
  closeModal: () => void;
  data: DataRow | null;
}

export interface File {
  name: string;
  size: number;
}

export type Inputs = {
  sponsor_logo: File;
  sponsor_name: string;
  link: string;
  award: string;
}

// Validation Schema
const schema = yup.object().shape({
  sponsor_logo: yup.mixed<File>().required("Sponsor logo is required."),
  sponsor_name: yup.string().required("Sponsor's name is required"),
  link: yup.string().required("Sponsor's name is required"),
  award: yup.string().required('Please select an award.')
})

const EditSponsorForm = ({ closeModal, data }: EditSponsorFormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      award: ""
    }
  });

  const onSubmit = async (data: any) => {
    let modified_data = {
      sponsor_name: data.sponsor_name,
      link: data.link,
      award_id: data.award,
      logo: data.sponsor_logo[0],
    };
    const processingToastId = toast.loading("Processing...");


    axios
      .patch(`${BASE_URL}/sponsors`, modified_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("User created successfully.");

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
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-6 w-full md:w-1/2 space-y-4 shadow rounded-md">
      <Typography
        variant="h4"
        className="text-2xl capitalize font-LatoBold text-gray-900"
      >
        Edit Sponsor details
      </Typography>

      <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
        <Typography className="capitalize">name</Typography>
        <input
          type="text"
          defaultValue={data?.sponsor_name}
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
          defaultValue={data?.link}
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
              render={({ field, fieldState }) => {
                return (
                  <>
                    <select {...field} className={`w-full h-[2.3rem] ${ fieldState.invalid ? 'border-red-500' : 'border-gray-300'} font-LatoRegular text-sm rounded`}>
                      <option value="">Select an option</option>
                      <option value="2">Option 2</option>
                    </select>
                    {(fieldState.error || fieldState.error != undefined) && <ErrorFormField message={`${fieldState.error.message}`} />}
                  </>
                )
              }}
            />
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
        {/* Display the previously uploaded file name if it exists */}
        {data?.logo && (
          <Typography className="text-sm text-gray-500 font-LatoBold">
            Current Logo: {data.logo}
          </Typography>
        )}
      </div>

      <div className="flex flex-row items-center justify-end gap-1">
        <Button
          size="md"
          onClick={closeModal}
          className="capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold rounded-full"
        >
          cancel
        </Button>
        <Button
          size="md"
          type="submit"
          className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
        >
          save changes
        </Button>
      </div>
      {/* Toaster */}
      <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />
    </form>
  );
};

export default EditSponsorForm;