import { Button, Typography } from "@material-tailwind/react";
import { ChangeEvent, useEffect, useState } from "react";
import { MdDelete, MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import ErrorFormField from "../Errors/ErrorFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  record_label: string;
  debut_year: number;
  stage_name: string;
  bio: string;
  official_website_link?: string | undefined;
  spotify_music_link?: string | undefined;
  apple_music_link?: string | undefined;
  youtube_music_link?: string | undefined;
  boomplay_music_link?: string | undefined;
};

// Validation Schema
const schema = yup.object().shape({
  record_label: yup.string().required("Record label is required."),
  debut_year: yup
    .number()
    .required("Debut year is required."),
  stage_name: yup.string().required("Stage name is required."),
  bio: yup.string().required("Biography is required."),
  official_website_link: yup.string(),
  spotify_music_link: yup.string(),
  apple_music_link: yup.string(),
  youtube_music_link: yup.string(),
  boomplay_music_link: yup.string(),
});

const AddArtistProfileForm = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [occupationsList, setOccupationsList] = useState([]);
  const [genresList, setGenresList] = useState([]);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const userID = urlParams.get("user");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/admin/occupations`).then((response: any) => {
      setOccupationsList(response.data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/genres`).then((response: any) => {
      setGenresList(response.data.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  // Handle multiple occupation inputs
  const [inputFields, setInputFields] = useState([""]);
  // Handle multiple genre inputs
  const [genreFields, setGenreFields] = useState([""]);

  const handleAddInputField = () => {
    // Create a new input field and add it to the state
    setInputFields([...inputFields, ""]);
  };
  const handleAddGenreField = () => {
    // Create a new input field and add it to the state
    setGenreFields([...genreFields, ""]);
  };

  const handleOptionChange = (
    index: number,
    e: ChangeEvent<HTMLSelectElement>,
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = e.target.value;
    setInputFields(newInputFields);
  };

  const handleGenreChange = (
    index: number,
    event: ChangeEvent<HTMLSelectElement>,
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setGenreFields(newInputFields);
  };

  const handleDeleteInputField = (
    index: number,
    e: { preventDefault: () => void },
  ) => {
    e.preventDefault();
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleDeleteGenreField = (
    index: number,
    e: { preventDefault: () => void },
  ) => {
    e.preventDefault();
    const newInputFields = [...genreFields];
    newInputFields.splice(index, 1);
    setGenreFields(newInputFields);
  };

  const dataToOccupations = (items: string[]) => {
    // Convert the array of items to an array of occupation objects
    const occupationObjects = items.map((item) => ({
      name: item,
    }));

    return occupationObjects;
  };
  const dataToGenres = (items: string[]) => {
    // Convert the array of items to an array of occupation objects
    const genreObjects = items.map((item) => ({
      name: item,
    }));

    return genreObjects;
  };

  const prepareData = (): any => {
    const occupations = dataToOccupations(inputFields);
    const occupationsArray: any = [];
    occupations.map((item) => {
      occupationsArray.push(Number(Object.values(item)));
    });
    return occupationsArray;
  };

  const prepareGenreData = (): any => {
    const genres = dataToGenres(genreFields);
    const genresArray: any = [];
    genres.map((item) => {
      genresArray.push(Number(Object.values(item)));
    });
    return genresArray;
  };

  const onSubmit = async (data: any) => {
    const occupationDataToSubmit: any = prepareData();
    const genreDataToSubmit: any = prepareGenreData();

    const dataForSubmission = {
      bio: data.bio,
      debut_year: Number(data.debut_year),
      stage_name: data.stage_name,
      record_label: data.record_label,
      official_website_link: data.official_website_link,
      spotify_music_link: data.spotify_music_link,
      youtube_music_link: data.youtube_music_link,
      apple_music_link: data.apple_music_link,
      boomplay_music_link: data.boomplay_music_link,
      artist_occupations: occupationDataToSubmit,
      genres: genreDataToSubmit,
      user_information_id: userID,
    };

    const processingToastId = toast.loading("Processing...");

    axios
      .post(`${BASE_URL}/artists/profiles`, dataForSubmission)
      .then((res) => {
        toast.dismiss(processingToastId);
        if (res.status == 201) {
          const responseToastId = toast.success("Profile set successfully.");

          setTimeout(() => {
            toast.dismiss(responseToastId);
            navigate(`/admin/artists`);
          }, 3000);
        }
      })
      .catch((e) => {
        const messages: any = Object.values(e.response.data.message);

        for (let item of messages) {
          item.map((text: string) => {
            toast.error(`${text}`);
          });
        }
        toast.dismiss(processingToastId);
      });
  };

  return (
    <form className="px-4 py-2" onSubmit={handleSubmit(onSubmit)}>
      <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
        artist profile completion
      </Typography>
      <div className="flex w-full flex-col gap-4 rounded-md bg-slate-50 p-4">
        <div className="grid w-full grid-cols-1 items-center justify-between gap-2 md:grid-cols-2 md:gap-4">
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              record label <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter record label"
              {...register("record_label", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.record_label && (
              <ErrorFormField message={`${errors.record_label?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              debut year <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="Enter debut year"
              {...register("debut_year", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.debut_year && (
              <ErrorFormField message={`${errors.debut_year?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              stage name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter stage name"
              {...register("stage_name", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.stage_name && (
              <ErrorFormField message={`${errors.stage_name?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              biography <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Enter artist biography"
              {...register("bio", { required: true })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.bio && (
              <ErrorFormField message={`${errors.bio?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Official website link
            </label>
            <input
              type="text"
              placeholder="Enter official website link"
              {...register("official_website_link", { required: false })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.official_website_link && (
              <ErrorFormField
                message={`${errors.official_website_link?.message}`}
              />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Spotify link
            </label>
            <input
              type="text"
              placeholder="Enter spotify website link"
              {...register("spotify_music_link", { required: false })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.spotify_music_link && (
              <ErrorFormField
                message={`${errors.spotify_music_link?.message}`}
              />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              apple music link
            </label>
            <input
              type="text"
              placeholder="Enter apple music link"
              {...register("apple_music_link", { required: false })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.apple_music_link && (
              <ErrorFormField message={`${errors.apple_music_link?.message}`} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              youtube link
            </label>
            <input
              type="text"
              placeholder="Enter youtube link"
              {...register("youtube_music_link", { required: false })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.youtube_music_link && (
              <ErrorFormField
                message={`${errors.youtube_music_link?.message}`}
              />
            )}
          </div>
          <div className="flex w-full flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              boomplay link
            </label>
            <input
              type="text"
              placeholder="Enter boomplay link"
              {...register("boomplay_music_link", { required: false })}
              className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
            />
            {errors.boomplay_music_link && (
              <ErrorFormField
                message={`${errors.boomplay_music_link?.message}`}
              />
            )}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-center justify-between gap-2 md:grid-cols-2 md:gap-4">
          <div className="w-full">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              occupation(<span className="normal-case">s</span>){" "}
              <span className="text-red-500">*</span>
            </label>
            {inputFields.map((_value, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <select
                    required
                    onChange={(e) => handleOptionChange(index, e)}
                    className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option value="" className="normal-case">
                      Select an occupation
                    </option>
                    {occupationsList.map((item: any, i) => (
                      <option
                        key={i}
                        value={item.id}
                        className="font-LatoRegular capitalize"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {index == 0 ? (
                    <></>
                  ) : (
                    <Button
                      onClick={(e) => handleDeleteInputField(index, e)}
                      size="sm"
                      className="h-10 rounded-md bg-red-400 transition ease-in-out hover:bg-red-600"
                    >
                      <MdDelete className="text-lg" />
                    </Button>
                  )}
                </div>
              );
            })}
            <Button
              size="sm"
              onClick={handleAddInputField}
              className="group my-2 flex items-center gap-2 rounded-full bg-transparent shadow-none"
            >
              <MdAdd className="cursor-pointer rounded-md text-2xl text-gray-400 transition ease-in-out group-hover:text-yellow-500" />
              <span className="font-LatoRegular text-sm capitalize text-gray-500 group-hover:text-yellow-500">
                add Occupation selection
              </span>
            </Button>
          </div>
          <div className="w-full">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Genre(<span className="normal-case">s</span>){" "}
              <span className="text-red-500">*</span>
            </label>
            {genreFields.map((_value, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <select
                    required
                    onChange={(e) => handleGenreChange(index, e)}
                    className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular capitalize"
                  >
                    <option value="" className="normal-case">
                      Select a Genre
                    </option>
                    {genresList.map((item: any, i) => (
                      <option
                        key={i}
                        value={item.id}
                        className="font-LatoRegular capitalize"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {index == 0 ? (
                    <></>
                  ) : (
                    <Button
                      onClick={(e) => handleDeleteGenreField(index, e)}
                      size="sm"
                      className="h-10 rounded-md bg-red-400 transition ease-in-out hover:bg-red-600"
                    >
                      <MdDelete className="text-lg" />
                    </Button>
                  )}
                </div>
              );
            })}
            <Button
              size="sm"
              onClick={handleAddGenreField}
              className="group my-2 flex items-center gap-2 rounded-full bg-transparent shadow-none"
            >
              <MdAdd className="cursor-pointer rounded-md text-2xl text-gray-400 transition ease-in-out group-hover:text-yellow-500" />
              <span className="font-LatoRegular text-sm capitalize text-gray-500 group-hover:text-yellow-500">
                add Genre selection
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-1 py-2">
        <Button
          size="sm"
          type="submit"
          className="h-10 rounded-full bg-gray-900 font-LatoBold capitalize transition ease-in-out hover:bg-yellow-300 hover:text-gray-900"
        >
          finish
        </Button>
      </div>
      {/* toaster  */}
      <Toaster position="top-center" containerClassName="font-LatoRegular" />
    </form>
  );
};

export default AddArtistProfileForm;
