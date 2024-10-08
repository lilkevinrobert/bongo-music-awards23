import { CardBody, Typography, CardFooter, Card, Button } from '@material-tailwind/react'
import useFetch from '../../hooks/useFetch';
import Errors from '../Errors/Errors';
import { useForm, Controller } from "react-hook-form";
import LoadingDialog from '../Loading/LoadingDialog';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

interface FormProps {
    handleOpenGenresDialog: () => void;
    awardId: string | undefined;
}

interface Genre {
    id: number;
    name: string;
}

interface Data {
    data: [];
}
interface FormData {
    selectedItems: number[];
}
interface FetchResult {
    data: Data | null;
    loading: boolean;
    error: Error | null;
}
interface TempDataGenre {
    data: {
        genres: []
    };
}
export interface TempFetchResultGenre {
    data: TempDataGenre | null;
    loading: boolean;
    error: Error | null;
}

const AddAwardGenreForm = ({ handleOpenGenresDialog, awardId }: FormProps) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    // GET data - genres
    const {
        data: genresList,
        loading: genresListLoading,
        error: genresListError,
    }: FetchResult = useFetch(`${BASE_URL}/genres`);

    // GET data - award genres
    const {
        data: awardGenresList,
        loading: awardGenresListLoading,
        error: awardGenresListError,
    }: TempFetchResultGenre = useFetch(`${BASE_URL}/awards/${awardId}/genres`);

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
            award_id: Number(awardId),
            genre_id: data.selectedItems
        }
        const processingToastId = toast.loading("Processing...");
        axios
            .post(`${BASE_URL}/awards/${awardId}/genres`, modified_data)
            .then((res) => {
                toast.dismiss(processingToastId);
                if (res.status == 201) {
                    const responseToastId = toast.success("Genre(s) added successfully.");

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
        <>
            {
                genresListLoading ? (
                    <LoadingDialog />
                ) : genresListError ? (
                    <Errors errorName={genresListError?.name} message={genresListError?.message} />
                ) : genresList?.data.length === 0 ? (
                    <p>Add a genre please. see Genres page NOW!</p>
                ) : awardGenresListLoading ? (
                    <LoadingDialog />
                ) : awardGenresListError ? (
                    <Errors errorName={awardGenresListError.name} message={awardGenresListError.message} />
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card className="mx-auto w-full max-w-[80rem] rounded-md">
                            <CardBody className="flex flex-col gap-4">
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="font-LatoBold"
                                >
                                    Add Awards Genre(s)
                                </Typography>
                                <Typography
                                    className="mb-3 font-LatoRegular"
                                    variant="paragraph"
                                    color="gray"
                                >
                                    Select appropriate genre form the list below.
                                </Typography>

                                {/* Available Genres */}
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent border-none rounded p-0">
                                    {
                                        genresList?.data.map((item: Genre, index) => (
                                            <Controller
                                                key={index}
                                                name="selectedItems"
                                                control={control}
                                                render={() => {
                                                    // Check if the item is already in the awardGenresList
                                                    const isChecked = awardGenresList?.data.genres.some(
                                                        (genre: any) => genre.id === item.id
                                                    );
                                                    return (
                                                        <div className="flex items-center space-x-2 p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition duration-300 ease-linear shadow">
                                                            <label className="flex items-center cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isChecked || selectedItems?.includes(item.id)}
                                                                    onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                                                                    className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded checked:bg-gray-900 focus:ring-yellow-300 transition duration-200 ease-in-out"
                                                                />
                                                                <span className="ml-3 text-gray-800 font-LatoRegular uppercase">{item.name}</span>
                                                            </label>
                                                        </div>
                                                    )
                                                }}
                                            />
                                        ))
                                    }
                                </div>
                                <CardFooter className="pt-4 pb-0 px-0 flex flex-row items-center justify-end bg-transparent border-t gap-2">
                                    <Button
                                        variant="filled"
                                        onClick={handleOpenGenresDialog}
                                        className="rounded-full font-LatoBold bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800"
                                    >
                                        cancel
                                    </Button>
                                    <Button variant="filled" type='submit'
                                        className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
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

export default AddAwardGenreForm