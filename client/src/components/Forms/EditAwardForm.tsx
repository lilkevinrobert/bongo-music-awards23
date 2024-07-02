import { Button, Typography } from '@material-tailwind/react'

const EditAwardForm = () => {
  return (
    <form className="bg-transparent space-y-4">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          basic details
        </Typography>
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">title</Typography>
          <input
            type="text"
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            placeholder="Name of Award Event"
          />
        </div>
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">location</Typography>
          <input
            type="text"
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
            placeholder="Enter a Location"
          />
        </div>
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">date</Typography>
          <input
            type="date"
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
          />
        </div>
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">time</Typography>
          <input
            type="time"
            className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded"
          />
        </div>
        <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
          <Typography className="capitalize">poster</Typography>
          <input
            type="file"
            className="w-full h-full border-gray-300 font-LatoRegular text-sm rounded"
          />
        </div>
        <div className="w-full flex items-end justify-end">
          <Button
            size="sm"
            className="w-full md:w-auto font-LatoRegular text-sm capitalize rounded-full text-white hover:text-gray-900 bg-gray-900 hover:bg-amber-400 transition ease-in-out"
          >
            save &nbsp; changes
          </Button>
        </div>
      </form>
  )
}

export default EditAwardForm