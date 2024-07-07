import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { MdClose } from "react-icons/md";

interface FormProps {
  closeModal: () => void;
}

const AddSponsorForm = ({ closeModal }: FormProps) => {
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form>
        <CardBody className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between my-4 font-semibold">
            <Typography
              variant="h4"
              className="text-2xl capitalize font-LatoBold text-gray-900"
            >
              New Sponsor
            </Typography>
            <div className="bg-gray-100 rounded">
              <MdClose
                className="w-6 h-6 cursor-pointer rounded transition ease-in-out hover:bg-slate-800 hover:text-white"
                onClick={closeModal}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">name</Typography>
            <input
              type="text"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
              placeholder="Name of Sponsor"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">link</Typography>
            <input
              type="text"
              className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
              placeholder="Enter sponsor's link"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">logo</Typography>
            <input
              type="file"
              className="w-full h-full border-gray-300 font-LatoRegular text-sm rounded"
              placeholder="Enter a date"
            />
          </div>

          <Button
            size="sm"
            className="capitalize hover:text-gray-900 hover:bg-yellow-400 transition ease-in-out font-LatoBold"
          >
            add sponsor
          </Button>
        </CardBody>
      </form>
    </Card>
  );
};

export default AddSponsorForm;
