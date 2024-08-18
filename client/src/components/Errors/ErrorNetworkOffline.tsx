import { Button, Typography } from "@material-tailwind/react"
import {FaRegFaceSadTear} from "react-icons/fa6"
import {IoReload} from "react-icons/io5"

const ErrorNetworkOffline = () => {
    const handleReload = () => {
        window.location.reload();
    }
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
        <FaRegFaceSadTear className="text-6xl text-gray-500 mb-4" />
        <Typography className="font-LatoBold text-lg text-gray-900">Ooops!</Typography>
        <Typography className="font-LatoRegular text-gray-900 capitalize">No internet connection found!</Typography>
        <Typography className="font-LatoRegular text-gray-900 normal-case">Please check your connection settings</Typography>
        <Button onClick={handleReload} size="sm" className="capitalize text-white hover:text-gray-900 hover:bg-amber-300 transition ease-linear flex flex-row items-center gap-2 rounded-full font-LatoBold my-4">
            <IoReload className="text-lg" />
            try again</Button>
    </div>
  )
}

export default ErrorNetworkOffline