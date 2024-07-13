import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

interface FormProps {
  closeModal: () => void;
}

const AddCategoryForm = ({ closeModal }: FormProps) => {
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
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
            category
          </label>
          <input
            type="text"
            id="category"
            // {...register("middle_name", { required: false })}
            className="h-10 mt-1 p-2 pl-4 border border-gray-300 font-LatoRegular rounded-md w-full"
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-1">
        <Button size="sm" onClick={closeModal} className="h-10 capitalize text-gray-900 bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold shadow-none rounded-full">cancel</Button>
        <Button size="sm" className="h-10 capitalize hover:text-gray-900 bg-gray-900 hover:bg-yellow-400 transition ease-in-out font-LatoBold rounded-full">create</Button>
        </div>
        </CardBody>
      </form>
    </Card>
  );
};

export default AddCategoryForm;
