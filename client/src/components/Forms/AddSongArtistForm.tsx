import { Button, Card, CardBody, Typography } from "@material-tailwind/react";

interface IAddSongArtistFormProps {
  closeModal: () => void;
}

const AddSongArtistForm = ({closeModal}:IAddSongArtistFormProps) => {
  return (
    <Card className="mx-auto w-full max-w-[24rem] rounded-md">
      <form action="#">
        <CardBody className="flex flex-col gap-4">
          <div className="my-4 flex flex-row items-center justify-between font-semibold">
            <Typography
              variant="h4"
              className="font-LatoBold text-2xl capitalize text-gray-900"
            >
              Add Song
            </Typography>
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">title</Typography>
            <input
              type="text"
              className="h-[2.3rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
              placeholder="Name of song"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">artist / artists</Typography>
            <input
              type="text"
              className="h-[2.3rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
              placeholder="Name of artist or artists"
            />
          </div>
          <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
            <Typography className="capitalize">year</Typography>
            <input
              type="text"
              className="h-[2.3rem] w-full rounded border-gray-300 font-LatoRegular text-sm"
              placeholder="Production year"
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
              add song
            </Button>
          </div>
        </CardBody>
      </form>
    </Card>
  )
}

export default AddSongArtistForm