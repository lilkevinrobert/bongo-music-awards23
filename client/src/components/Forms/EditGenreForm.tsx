import { Button, Card, CardBody, CardHeader, CardFooter, Typography } from "@material-tailwind/react";
import { IGenre } from "../Genre/Genres";

interface FormProps {
  closeModal: () => void;
  genre: IGenre | null;
}

const EditGenreForm = ({ closeModal, genre }: FormProps) => {
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form>
        <CardHeader className="shadow-none py-4 px-2">
        <Typography
          variant="h4"
          className="text-2xl capitalize font-LatoBold text-gray-900"
        >
          Edit Genre
        </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">name</Typography>
          <input
            type="text"
            value={genre?.name}
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            placeholder="Name of Sponsor"
          />
        </div>
        </CardBody>
        <CardFooter className="flex flex-row items-center justify-end gap-1">
          <Button
            size="md"
            onClick={closeModal}
            className="capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold rounded-full"
          >
            cancel
          </Button>
          <Button
            size="md"
            className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
          >
            save changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EditGenreForm;
