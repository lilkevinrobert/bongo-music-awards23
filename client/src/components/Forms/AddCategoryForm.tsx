import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { ChangeEvent, useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";

interface FormProps {
  closeModal: () => void;
}
// type CategoriesType = {
//   categoryName: string;
// };

const AddCategoryForm = ({ closeModal }: FormProps) => {
  // Handle multiple category inputs
  const [inputFields, setInputFields] = useState([""]);

  const handleAddInputField = () => {
    // Create a new input field and add it to the state
    setInputFields([...inputFields, ""]);
  };
  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = event.target.value;
    setInputFields(newInputFields);
  };
  const handleDeleteInputField = (
    index: number,
    e: { preventDefault: () => void }
  ) => {
    e.preventDefault();
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };
  // const dataToCategories = (items: string[]) => {
  //   // Convert the array of items to an array of category objects
  //   const categoryObjects = items.map((item) => ({
  //     categoryName: item,
  //   }));

  //   return categoryObjects;
  // };

  // const removeEmptyCategories = (categories: CategoriesType[]) => {
  //   // Filter out empty category objects
  //   const filteredCategories = categories.filter(
  //     (category) => category.categoryName.trim() !== ""
  //   );

  //   return filteredCategories;
  // };

  return (
    <Card className="mx-auto w-full max-w-[24rem] max-h-[95vh] rounded-md overflow-y-auto">
      <form>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between mb-6 uppercase">
            <Typography
              variant="h4"
              className="text-2xl capitalize font-LatoBold text-gray-900"
            >
              New Category
            </Typography>
          </div>
          <div className="w-full">
            <label
              htmlFor="firstname"
              className="block text-sm font-LatoBold capitalize text-gray-900"
            >
              Genre
            </label>
            <select
              name="genre"
              className="h-10 mt-1 p-2 pl-4 border border-gray-300 font-LatoRegular rounded-md w-full"
            >
              <option className="normal-case">Select a Genre</option>
              <option value="Bongo Flavor" className="capitalize">
                bongo flavor
              </option>
              <option value="Dancers" className="capitalize">
                dancers
              </option>
              <option value="Hip-Hop" className="capitalize">
                hip-hop
              </option>
              <option value="Taarabu" className="capitalize">
                taarabu
              </option>
              <option value="Religious songs" className="capitalize">
                religious songs
              </option>
              <option value="Nyimbo za asili" className="capitalize">
                nyimbo za asili
              </option>
              <option value="Upcoming artist" className="capitalize">
                upcoming artist
              </option>
              <option value="Best Performer" className="capitalize">
                best performer
              </option>
            </select>
          </div>

          <div className="w-full">
            <label
              htmlFor="input2"
              className="block text-sm font-LatoBold capitalize text-gray-900"
            >
              category / categories
            </label>
            {inputFields.map((value, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={value}
                  className="h-10 mt-1 p-2 pl-4 border border-gray-300 font-LatoRegular rounded-md w-full"
                  placeholder={`Enter Category ${index + 1}`}
                  onChange={(event) => {
                    handleInputChange(index, event);
                  }}
                />
                <Button
                  onClick={(e) => handleDeleteInputField(index, e)}
                  size="sm"
                  className="h-10 rounded-full bg-red-400 hover:bg-red-600 transition ease-in-out"
                >
                  <MdDelete className="text-lg" />
                </Button>
              </div>
            ))}
            <Button
              size="sm"
              onClick={handleAddInputField}
              className="flex items-center gap-2 my-2 rounded-full shadow-none bg-transparent group"
            >
              <MdAdd
                className="text-2xl text-gray-400 cursor-pointer rounded-md transition ease-in-out group-hover:text-yellow-500"
              />
              <span className="text-sm text-gray-500 font-LatoRegular capitalize group-hover:text-yellow-500">
                add Category input
              </span>
            </Button>
          </div>
          <div className="flex flex-row items-center justify-end gap-1">
            <Button
              size="sm"
              onClick={closeModal}
              className="h-10 capitalize text-gray-900 bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold shadow-none rounded-full"
            >
              cancel
            </Button>
            <Button
              size="sm"
              className="h-10 capitalize hover:text-gray-900 bg-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoBold rounded-full"
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
