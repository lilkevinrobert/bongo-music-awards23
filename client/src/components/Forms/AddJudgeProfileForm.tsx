import { Button, Typography } from "@material-tailwind/react"
import { useForm } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  organization: string;
  position: string;
  expertise: string;
  bio: string;
}

// Validation schema
const schema = yup.object().shape({
  organization: yup.string().required("Organization name is required."),
  position: yup.string().required("Position is required."),
  expertise: yup.string().required("Expertise is required."),
  bio: yup.string().required("Biography is required."),
})

const AddJudgeProfileForm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const userID = urlParams.get("user");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const dataForSubmission = {
      user_information_id: userID,
      ...data
    }
    const processingToastId = toast.loading("Processing...");

    axios
      .post(`${BASE_URL}/judges`, dataForSubmission)
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("Profile set successfully.");

          setTimeout(() => {
            toast.dismiss(responseToastId);
            navigate(`/admin/judges`);
          }, 3000);
        }
      })
      .catch((e) => {
        console.error(e)
        const messages: any = Object.values(e.response.data.message);

        for (let item of messages) {
          item.map((text: string) => {
            toast.error(`${text}`);
          });
        }
        toast.dismiss(processingToastId);
      });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-2">
      <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
        Judge profile completion
      </Typography>
      <div className="flex w-full flex-col gap-4 rounded-md bg-slate-50 p-4">
        <div className="grid w-full grid-cols-1 items-center justify-between gap-2 md:grid-cols-2 md:gap-4">
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter name of his/her organization"
              {...register("organization", { required: true })}
              className={`mt-1 w-full rounded-md ${errors.organization ? "border-2 border-red-500" : "border border-gray-300"} p-2 font-LatoRegular`}
            />
            {errors.organization && (
              <ErrorFormField message={`${errors.organization?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Position <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter his/her position"
              {...register("position", { required: true })}
              className={`mt-1 w-full rounded-md ${errors.position ? "border-2 border-red-500" : "border border-gray-300"} p-2 font-LatoRegular`}
            />
            {errors.position && (
              <ErrorFormField message={`${errors.position?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Expertise <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter his/her expertise"
              {...register("expertise", { required: true })}
              className={`mt-1 w-full rounded-md ${errors.expertise ? "border-2 border-red-500" : "border border-gray-300"} p-2 font-LatoRegular`}
            />
            {errors.expertise && (
              <ErrorFormField message={`${errors.expertise?.message}`} />
            )}
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label className="font-LatoBold text-base capitalize text-gray-900">
            biography <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Enter his/her biography"
            {...register("bio", { required: true })}
            className={`mt-1 w-full rounded-md ${errors.bio ? "border-2 border-red-500" : "border border-gray-300"} p-2 font-LatoRegular`}
          />
          {errors.bio && (
            <ErrorFormField message={`${errors.bio?.message}`} />
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-1 py-2">
        <Button
          size="sm"
          type="submit"
          className="h-10 rounded-full bg-gray-900 font-LatoBold capitalize transition ease-in-out duration-300 hover:bg-yellow-300 hover:text-gray-900"
        >
          finish
        </Button>
      </div>
      {/* toaster  */}
      <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
        duration: 5000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />
    </form>
  )
}

export default AddJudgeProfileForm
