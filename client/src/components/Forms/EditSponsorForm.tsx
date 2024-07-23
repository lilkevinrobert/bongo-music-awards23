import { Button, Typography } from "@material-tailwind/react";
import {Sponsor} from "../Table/SponsorsDataTable";

interface EditSponsorFormProps {
  closeModal: () => void;
  data: Sponsor | null;
}

const EditSponsorForm = ({ closeModal, data }: EditSponsorFormProps) => {
  return (
    <form className="bg-white p-4 md:p-6 w-full md:w-1/2 space-y-4 shadow rounded-md">
        <Typography
          variant="h4"
          className="text-2xl capitalize font-LatoBold text-gray-900"
        >
          Edit Sponsor details
        </Typography>

      <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
        <Typography className="capitalize">name</Typography>
        <input
          type="text"
          value={data?.name}
          className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
          placeholder="Name of Sponsor"
        />
      </div>
      <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
        <Typography className="capitalize">link</Typography>
        <input
          type="text"
          value={data?.link}
          className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
          placeholder="Enter sponsor's link"
        />
      </div>
      <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
        <Typography className="capitalize">logo</Typography>
        <div className="w-full flex flex-col md:flex-row gap-4">
          <img
            src="#"
            alt={`${data?.name} logo`}
            className="w-1/2 h-40 bg-yellow-100 rounded text-sm font-LatoRegular"
          />
          <input
            type="file"
            className="w-full h-full border-gray-300 bg-gray-100 font-LatoRegular text-sm rounded"
            placeholder="Enter a date"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-end gap-1">
        <Button
          size="md"
          onClick={closeModal}
          className="capitalize text-gray-900 shadow-none bg-transparent hover:bg-gray-200 transition ease-in-out font-LatoBold"
        >
          cancel
        </Button>
        <Button
          size="md"
          className="capitalize hover:text-gray-900 hover:bg-yellow-300 transition ease-in-out font-LatoRegular hover:font-LatoBold rounded-full"
        >
          save changes
        </Button>
      </div>
    </form>
  );
};

export default EditSponsorForm;
