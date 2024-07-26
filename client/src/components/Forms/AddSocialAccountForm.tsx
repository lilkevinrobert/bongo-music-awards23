import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

interface IAddSocialAccountFormProps {
  closeModal: () => void;
}

const AddSocialAccountForm = ({ closeModal }: IAddSocialAccountFormProps) => {
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form action="#">
        <CardBody className="flex flex-col gap-4">
          <div className="my-4 flex flex-row items-center justify-between font-semibold">
            <Typography
              variant="h4"
              className="font-LatoBold text-2xl capitalize text-gray-900"
            >
              Add Social Account
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">Platform</Typography>
            <select
              name="platform"
              className="h-[2.3rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
            >
              <option value="">Select a platform</option>
              <option value="x">X</option>
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">Youtube</option>
              <option value="spotify">Spotify</option>
              <option value="boomplay">Boomplay</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">Link</Typography>
            <input
              type="text"
              className="h-[2.3rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
              placeholder="Name of Platform"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-1 mt-2">
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
              add account
            </Button>
          </div>
        </CardBody>
      </form>
    </Card>
  );
};

export default AddSocialAccountForm;
