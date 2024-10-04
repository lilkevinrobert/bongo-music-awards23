import { Button, Typography } from '@material-tailwind/react'
import useFetch from "../../hooks/useFetch.ts";
import Errors from "../Errors/Errors.tsx";
import { useEffect } from 'react';
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import LoadingList from '../Loading/LoadingList.tsx';

interface EditData {
  id: string;
  title: string;
  location: string;
  status: string;
  profile_image_url: string;
}

interface AwardsData {
  data: EditData;
}

interface FetchResult {
  data: AwardsData | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

interface AwardEventDetailsProps {
  awardId: string | undefined;
}

interface File {
  name: string;
  size: number;
}

type Inputs = {
  title: string;
  location: string;
  status: string;
  poster_image_url: File;
}

// Validation Schema
const schema = yup.object().shape({
  poster_image_url: yup.mixed<File>().required("Please add a poster for the Award Event."),
  title: yup.string().required("Please add a title."),
  status: yup.string().required("Please add a status."),
  location: yup.string().required('Please add a location.')
})

const EditAwardForm = ({ awardId }: AwardEventDetailsProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      location: "",
      status: "",
    }
  });

  // GET details about the current/selected award event
  const {
    data: awardData,
    loading: awardDataLoading,
    error: awardDataError,
    fetchData
  }: FetchResult = useFetch(`${BASE_URL}/awards/${awardId}`);

  useEffect(() => {
    // Set Default values
    if (awardData?.data?.title) {
      setValue("title", awardData.data.title);
    }
    if (awardData?.data?.location) {
      setValue("location", awardData.data.location);
    }
    if (awardData?.data?.status) {
      setValue("status", awardData.data.status);
    }
  }, [awardData, setValue]);

  const onSubmit = async (data: any) => {
    let modified_data = {
      title: data.title,
      location: data.location,
      status: data.status,
      poster_image_url: data.poster_image_url[0],
    };
    const processingToastId = toast.loading("Processing...");

    axios
      .patch(`${BASE_URL}/awards/${awardId}`, modified_data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 200) {
          const responseToastId = toast.success("Award changes saved successfully.");

          setTimeout(() => {
            toast.dismiss(responseToastId);
            fetchData(); // Re-fetch data after save
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
    <>
      {
        awardDataLoading ? (
          <LoadingList />
        ) : awardDataError ? (
          <Errors errorName={awardDataError?.name} message={awardDataError.message} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent space-y-4">
            <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
              basic details
            </Typography>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
              <Typography className="capitalize">title</Typography>
              <input
                type="text"
                className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
                placeholder="Name of Award Event"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <ErrorFormField message={`${errors.title?.message}`} />
              )}
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
              <Typography className="capitalize">location</Typography>
              <input
                type="text"
                className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
                placeholder="Enter a Location"
                {...register("location", { required: true })}

              />
              {errors.location && (
                <ErrorFormField message={`${errors.location?.message}`} />
              )}
            </div>
            {/* <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">date</Typography>
            <input
              type="date"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">time</Typography>
            <input
              type="time"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            />
          </div> */}
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
              <Typography className="capitalize">status</Typography>
              <Controller
                name="status"
                control={control}
                render={({ field, fieldState }) => {
                  return (
                    <>
                      <select {...field} className={`w-full h-[2.3rem] ${fieldState.invalid ? 'border-red-500' : 'border-gray-300'} font-LatoRegular text-sm rounded`}>
                        <option value="" disabled>Select Status</option>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="CLOSED">CLOSED</option>
                      </select>
                      {(fieldState.error || fieldState.error != undefined) && <ErrorFormField message={`${fieldState.error.message}`} />}
                    </>
                  )
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
              <Typography className="capitalize">poster</Typography>
              <Controller
                name="poster_image_url"
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
              {errors.poster_image_url && (
                <ErrorFormField message={`${errors.poster_image_url?.message}`} />
              )}
              {/* Display the previously uploaded file name if it exists */}
              {awardData?.data.profile_image_url && (
                <Typography className="text-sm text-gray-500 font-LatoRegular">
                  Current Poster: {awardData?.data.profile_image_url}
                </Typography>
              )}
            </div>
            <div className="w-full flex items-end justify-end">
              <Button
                size="sm"
                type='submit'
                className="w-full md:w-auto font-LatoRegular text-sm capitalize rounded-full text-white hover:text-gray-900 bg-gray-900 hover:bg-amber-400 transition ease-in-out"
              >
                save &nbsp; changes
              </Button>
            </div>
          </form>
        )
      }
    </>
  )
}

export default EditAwardForm