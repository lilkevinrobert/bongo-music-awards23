import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import Errors from "../Errors/Errors";
import LoadingDialog from "../Loading/LoadingDialog";


interface EditNominationFormProps {
    awardId: string | undefined;
    closeModal: () => void;
}

interface EditData {
    start_date: string;
    end_date: string;
    status: string;
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

type Inputs = {
    start_date: string;
    end_date: string;
    status: string;
}

// Valodation schema
const schema = yup.object().shape({
    start_date: yup.string().required("Add Start Date for Award Event"),
    end_date: yup.string().required("Add End Date for Award Event"),
    status: yup.string().required("Add End Date for Award Event"),
})
const EditNominationForm = ({ awardId, closeModal }: EditNominationFormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate()

    const {
        register,
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            start_date: "",
            end_date: "",
            status: "",
        }
    });

    // GET details about the current/selected award event
    const {
        data: awardData,
        loading: awardDataLoading,
        error: awardDataError
    }: FetchResult = useFetch(`${BASE_URL}/nominations/award/${awardId}`);

    useEffect(() => {
        // Set Default values
        if (awardData?.data?.start_date) {
            setValue("start_date", awardData.data.start_date);
        }
        if (awardData?.data?.end_date) {
            setValue("end_date", awardData.data.end_date);
        }
        if (awardData?.data?.status) {
            setValue("status", awardData.data.status);
        }
    }, [awardData, setValue]);

    const onSubmit = async (data: any) => {
        const payload = {
            award_id: Number(awardId),
            start_date: data.start_date,
            end_date: data.end_date,
            status: data.status
        }
        const processingToastId = toast.loading("Processing...");
        console.log(payload)
        axios
            .post(`${BASE_URL}/nominations/update_status`, payload)
            .then((res) => {
                closeModal();
                toast.dismiss(processingToastId);
                if (res.status == 201) {
                    const responseToastId = toast.success("Nomination status set successfully.");

                    setTimeout(() => {
                        toast.dismiss(responseToastId);
                        navigate(`/admin/awards/${awardId}`)
                    }, 3000);
                } else if (res.status == 500) {
                    toast.error("Action Failed")
                }
            })
            .catch((e) => {
                const errorCode = e.response.status
                const error = e.response.data.error
                const messages: any = Object.values(e.response.data.message);
                if (error && errorCode) {
                    toast.error(`${errorCode}: ${error}`)
                }

                for (let item of messages) {
                    item.map((text: string) => {
                        toast.error(`${text}`);
                    });
                }
                toast.dismiss(processingToastId);
            });
    }

    return (
        <>
            {
                awardDataLoading ? (
                    <LoadingDialog />
                ) : awardDataError ? (
                    <Errors errorName={awardDataError?.name} message={awardDataError.message} />
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card className="mx-auto w-full max-w-[28rem] rounded-md">
                            <CardBody className="flex flex-col gap-4">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="font-LatoBold"
                                >
                                    Manage Nomination Status
                                </Typography>
                                <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                                    <Typography className="capitalize">Start date</Typography>
                                    <input
                                        type="date"
                                        className={`w-full h-[2rem] border ${errors.start_date ? 'border-red-500' : 'border-gray-300'
                                            } font-LatoRegular text-sm rounded`} placeholder="Award event Start date"
                                        {...register("start_date", { required: true })}
                                    />
                                    {errors.start_date && (
                                        <ErrorFormField message={`${errors.start_date?.message}`} />
                                    )}
                                </div>
                                <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                                    <Typography className="capitalize">End date</Typography>
                                    <input
                                        type="date"
                                        className={`w-full h-[2rem] border ${errors.end_date ? 'border-red-500' : 'border-gray-300'
                                            } font-LatoRegular text-sm rounded`} placeholder="Award event Start date"
                                        {...register("end_date", { required: true })}
                                    />
                                    {errors.end_date && (
                                        <ErrorFormField message={`${errors.end_date?.message}`} />
                                    )}
                                </div>
                                <div className="flex flex-col gap-2 font-LatoBold text-gray-900">
                                    <Controller
                                        name="status"
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <>
                                                    <div className={`flex flex-row items-center justify-between mb-2 border ${errors.status ? 'border-red-500' : 'border-none'
                                                        } font-LatoRegular text-sm rounded`}>
                                                        <div>
                                                            <Typography className="capitalize">Current Status</Typography>
                                                            <p className="text-gray-500 text-xs font-LatoRegular">
                                                                Toggle the status to mark the item as active or inactive.
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-1">
                                                            <input
                                                                type="checkbox"
                                                                {...field}
                                                                className="hidden"
                                                                checked={field.value === "ACTIVE"}
                                                                onChange={(e) => field.onChange(e.target.checked ? "ACTIVE" : "CLOSED")}
                                                            />
                                                            <div
                                                                className={`relative w-12 h-6 rounded-full transition duration-300 ease-in-out cursor-pointer 
                                  ${field.value === "ACTIVE" ? 'bg-amber-300' : 'bg-gray-300'}`}
                                                                onClick={() => field.onChange(field.value === "ACTIVE" ? "CLOSED" : "ACTIVE")}
                                                            >
                                                                <div
                                                                    className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform transition duration-300 ease-in-out 
                                    ${field.value === "ACTIVE" ? 'translate-x-6' : ''}`}
                                                                />
                                                            </div>
                                                            <span className={`ml-2 font-LatoRegular text-sm ${field.value === "ACTIVE" ? 'text-gray-900' : 'text-gray-600'}`}>
                                                                {field.value === "ACTIVE" ? "OPEN" : "CLOSED"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {fieldState.error && (
                                                        <ErrorFormField message={`${fieldState.error.message}`} />
                                                    )}
                                                </>
                                            );
                                        }}
                                    />

                                </div>
                                <div className="flex flex-row items-center justify-end gap-4">
                                    <Button onClick={closeModal} className="bg-transparent shadow-none text-gray-800">cancel</Button>
                                    <Button
                                        size="md"
                                        type="submit"
                                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold rounded-full"
                                    >
                                        save changes
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                        {/* Toaster */}
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
        </>)
}

export default EditNominationForm
