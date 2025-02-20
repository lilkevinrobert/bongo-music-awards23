import { CardBody, Typography, CardFooter, Card, Button } from '@material-tailwind/react'
import useFetch from '../../hooks/useFetch';
import Errors from '../Errors/Errors';
import { useForm, Controller } from "react-hook-form";
import LoadingDialog from '../Loading/LoadingDialog';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from '../../api/axios';

interface FormProps {
    handleOpenJudgesDialog: () => void;
}

interface Judge {
    id: number;
    judge_expertise: string;
    judge_position: string;
    organization: string;
    position: string;
    user_information: {
        first_name: string;
        last_name: string;
    };
}

interface Data {
    data: [];
}

interface TempData {
    data: {
        judges: []
    };
}

export interface TempFetchResult {
    data: TempData | null;
    loading: boolean;
    error: Error | null;
    fetchData: () => void;
}

interface FormData {
    selectedItems: number[];
}

interface FetchResult {
    data: Data | null;
    loading: boolean;
    error: Error | null;
}
const AddAwardJudgeForm = ({ handleOpenJudgesDialog }: FormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const { awardId } = useParams();

    // GET data - judges
    const {
        data: judgesList,
        loading: judgesListLoading,
        error: judgesListError,
    }: FetchResult = useFetch(`${BASE_URL}/judges`);

    // GET data - award sponsors
    const {
        data: awardJudgesList,
        loading: awardJudgesListLoading,
        error: awardJudgesListError,
    }: TempFetchResult = useFetch(`${BASE_URL}/awards/${awardId}/judges`);

    const { handleSubmit, control, setValue, watch } = useForm<FormData>({
        defaultValues: {
            selectedItems: []
        }
    });

    const selectedItems = watch("selectedItems");

    const handleCheckboxChange = (id: number, isChecked: boolean) => {
        const currentSelection = selectedItems || [];

        if (isChecked) {
            // Add item to selectedItems array if checked
            setValue("selectedItems", [...currentSelection, id]);
        } else {
            // Remove item from selectedItems array if unchecked
            setValue(
                "selectedItems",
                currentSelection.filter((item) => item !== id)
            );
        }
    };

    const onSubmit = async (data: any) => {
        const modified_data = {
            award_id: awardId,
            judge_id: data.selectedItems
        }
        const processingToastId = toast.loading("Processing...");
        axios
            .post(`${BASE_URL}/awards/${awardId}/judges`, modified_data)
            .then((res) => {
                toast.dismiss(processingToastId);
                if (res.status == 201) {
                    const responseToastId = toast.success("Award Judge(s) added successfully.");

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
        <>
            {
                judgesListLoading ? (
                    <LoadingDialog />
                ) : judgesListError ? (
                    <Errors errorName={judgesListError?.name} message={judgesListError?.message} />
                ) : judgesList?.data.length === 0 ? (
                    <p>Add a judge please. See Judges page NOW!</p>
                ) : awardJudgesListLoading ? (
                    <LoadingDialog />
                ) : awardJudgesListError ? (
                    <Errors errorName={awardJudgesListError.name} message={awardJudgesListError.message} />
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card className='mx-auto w-full max-w-[44rem] rounded-md'>
                            <CardBody className="flex flex-col gap-4">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="font-LatoBold text-lg"
                                >
                                    Add Awards Judge(s)
                                </Typography>
                                <Typography
                                    className="mb-3 text-gray-500 font-LatoRegular"
                                    variant="paragraph"
                                    color="gray"
                                >
                                    Select appropriate judge form the list below.
                                </Typography>

                                {/* Available Judges */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-transparent border-none rounded p-0">
                                    {
                                        judgesList?.data.map((item: Judge, index) => {
                                            return (
                                                <Controller
                                                    key={index}
                                                    name="selectedItems"
                                                    control={control}
                                                    render={() => {
                                                        // Check if the item is already in awardJudgesList
                                                        const isChecked = awardJudgesList?.data.judges.some(
                                                            (judge: any) => judge.id === item.id
                                                        );

                                                        return (
                                                            <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300 ease-linear shadow">
                                                                <label className="flex items-center gap-2 cursor-pointer">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isChecked || selectedItems?.includes(item.id)} // Pre-check if in awardSponsorsList
                                                                        onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                                                                        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded checked:bg-gray-900 focus:ring-yellow-300 transition duration-200 ease-in-out"
                                                                    />
                                                                    <div className='flex flex-col items-center justify-center'>
                                                                        <span className="ml-3 text-gray-800 font-LatoRegular">
                                                                            {item.user_information.first_name} {item.user_information.last_name}
                                                                        </span>
                                                                        <div className='flex flex-col items-center justify-center'>
                                                                            <span className='text-center font-LatoBold'>
                                                                                {item.position}
                                                                            </span>
                                                                            <span className='text-center text-gray-700 font-LatoLight'>
                                                                                {item.organization}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        );
                                                    }}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <CardFooter className="pt-4 pb-0 px-0 flex flex-row items-center justify-end bg-transparent border-t gap-2">
                                    <Button
                                        variant="filled"
                                        onClick={handleOpenJudgesDialog}
                                        className="rounded-full font-LatoBold bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800"
                                    >
                                        cancel
                                    </Button>
                                    <Button variant="filled" type='submit'
                                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out duration-300 font-LatoRegular hover:font-LatoBold rounded-full"
                                    >
                                        Save &nbsp; Changes
                                    </Button>
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </form>
                )
            }
            <Toaster position="top-center" containerClassName="font-LatoRegular" toastOptions={{
                duration: 5000,
                style: {
                    background: '#333',
                    color: '#fff',
                },
            }} />
        </>
    )
}

export default AddAwardJudgeForm
