import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { IGenre } from "../Genre/Genres";
import axios from "axios";
import toast from "react-hot-toast";

export interface ICategoryType {
  id: any;
  name: string;
}

interface FormProps {
  closeModal: () => void;
}

interface Data {
  data: [];
}

interface FetchResult {
  data: Data | null;
  loading: boolean;
  error: Error | null;
  fetchData: () => void;
}

interface INewCategories {
  categories: {
    name: string;
    category_type_id: string;
  }[],
  genre_id: string;
}

const AddCategoryForm = ({ closeModal }: FormProps) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // fetch options from API
  const {
    data,
    error,
    loading: loadingGenres,
  }: FetchResult = useFetch(`${BASE_URL}/genres`);
  const { data: categoryTypesData, error: categoryTypesError, loading: categoryTypesLoading }: FetchResult = useFetch(`${BASE_URL}/category_types`);

  // handle select options
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  // Handle multiple category inputs and selects
  const [inputFields, setInputFields] = useState([""]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([""]);

  const handleAddInputField = () => {
    // Create a new input field and add it to the state
    setInputFields([...inputFields, ""]);
    setSelectedOptions([...selectedOptions, ""]);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setInputFields(newInputFields);
  };

  const handleSelectChange = (index: number, event: ChangeEvent<HTMLSelectElement>) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
    };

  const handleDeleteInputField = (
    index: number,
    e: { preventDefault: () => void },
  ) => {
    e.preventDefault();
    const newInputFields = [...inputFields];
    const newSelectedOptions = [...selectedOptions];

    // Remove the input and select option at the same index
    newInputFields.splice(index, 1);
    newSelectedOptions.splice(index, 1);

    setInputFields(newInputFields);
    setSelectedOptions(newSelectedOptions);
  };

  const dataToCategories = (items: string[], selectedOptions: string[]) => {
    // Convert the array of items to an array of category objects, including selected options
    const categoryObjects = items.map((item, index) => ({
      name: item,
      category_type_id: selectedOptions[index], // Corresponding selected option
    }));
  
    return categoryObjects;
  };  

  // U may or may not need it 🤷🏾‍♂️👇🏾
  // const removeEmptyCategories = (categories: CategoriesType[]) => {
  //   // Filter out empty category objects
  //   const filteredCategories = categories.filter(
  //     (category) => category.categoryName.trim() !== ""
  //   );

  //   return filteredCategories;
  // };

  const prepareData = (): INewCategories => {
    // Prepare categories using both input fields and selected options
    const categories = dataToCategories(inputFields, selectedOptions)
    const newCategories = {
      categories,
      genre_id: selectedOption
    }
    return newCategories
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    closeModal();
    const dataToSubmit: INewCategories = prepareData();
    const processingToastId = toast.loading("Processing..")
    axios
      .post(`${BASE_URL}/categories`, dataToSubmit)
      .then((res) => {
        if (res.status == 201) {
          toast.dismiss(processingToastId)
          const responseToastId = toast.success("Genre category created successfully.")
          setTimeout(() => {
            toast.dismiss(responseToastId)
            window.location.reload()
          }, 3000)
        }
      })
      .catch(() => {
        toast.dismiss(processingToastId)
        toast.error("Failed to create.")
      })
  }

  return (
    <Card className="mx-auto max-h-[95vh] w-full max-w-[24rem] overflow-y-auto rounded-md">
      <form onSubmit={handleSubmit}>
        <CardBody className="flex flex-col gap-4">
          <div className="mb-6 flex flex-row items-center justify-between uppercase">
            <Typography
              variant="h4"
              className="font-LatoBold text-2xl capitalize text-gray-900"
            >
              New Category
            </Typography>
          </div>
          <div className="w-full">
            <label
              htmlFor="firstname"
              className="block font-LatoBold text-sm capitalize text-gray-900"
            >
              Genre
            </label>
            <>
              {loadingGenres && (
                <Typography
                  variant="paragraph"
                  className="text-center font-LatoRegular text-base capitalize"
                >
                  populating fields...
                </Typography>
              )}
              {error && (
                <Typography
                  variant="paragraph"
                  className="font-LatoRegular text-base capitalize"
                >
                  some problem occurred.
                </Typography>
              )}
              {data && (
                <select
                  name="genre"
                  required
                  value={selectedOption}
                  onChange={handleChange}
                  className="mt-1 h-10 w-full rounded-md border border-gray-300 p-2 pl-4 capitalize font-LatoRegular"
                >
                  <option value="" disabled className="normal-case">
                    Select a Genre
                  </option>
                  {data.data.map((genre: IGenre, i) => (
                    <option key={i} value={genre.id} className="font-LatoRegular capitalize">
                      {genre.name}
                    </option>
                  ))}
                </select>
              )}
            </>
          </div>

          <div className="w-full">
            <label
              htmlFor="input2"
              className="block font-LatoBold text-sm capitalize text-gray-900"
            >
              category / categories
            </label>
            {inputFields.map((value, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={value}
                  required
                  className="mt-1 h-10 w-1/2 text-sm rounded-md border border-gray-300 p-2 pl-4 font-LatoRegular"
                  placeholder={`Enter Category ${index + 1}`}
                  onChange={(event) => {
                    handleInputChange(index, event);
                  }}
                />
                <>
                  {categoryTypesLoading && (
                    <Typography
                      variant="paragraph"
                      className="text-center font-LatoRegular text-base capitalize"
                    >
                      populating fields...
                    </Typography>
                  )}
                  {categoryTypesError && (
                    <Typography
                      variant="paragraph"
                      className="font-LatoRegular text-base capitalize"
                    >
                      some problem occurred.
                    </Typography>
                  )}
                  {
                    categoryTypesData &&
                    <select name="categoryType"
                      value={selectedOptions[index]}
                      onChange={(event) => handleSelectChange(index, event)}
                      className="mt-1 h-10 w-1/2 text-sm rounded-md border border-gray-300 p-2 pl-4 capitalize font-LatoRegular"
                    >
                      <option value="" disabled className="normal-case">
                        Select a type
                      </option>
                      {categoryTypesData?.data.map((type: ICategoryType, i) => (
                        <option key={i} value={type.id} className="font-LatoRegular capitalize">
                          {type.name}
                        </option>
                      ))}
                    </select>
                  }
                </>
                <Button
                  onClick={(e) => handleDeleteInputField(index, e)}
                  size="sm"
                  className="h-10 rounded-md bg-red-400 transition ease-in-out hover:bg-red-600"
                >
                  <MdDelete className="text-lg" />
                </Button>
              </div>
            ))}
            <Button
              size="sm"
              onClick={handleAddInputField}
              className="group my-2 flex items-center gap-2 rounded-full bg-transparent shadow-none"
            >
              <MdAdd className="cursor-pointer rounded-md text-2xl text-gray-400 transition ease-in-out group-hover:text-yellow-500" />
              <span className="font-LatoRegular text-sm capitalize text-gray-500 group-hover:text-yellow-500">
                add Category input
              </span>
            </Button>
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
              size="sm"
              type="submit"
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

export default AddCategoryForm;
