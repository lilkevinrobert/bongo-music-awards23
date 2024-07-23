import { Button, Typography } from '@material-tailwind/react'

const EditArtistProfileCredentials = () => {
  return (
    <form className="w-1/2">
        <div className=" w-full">
        <Typography className="text-lg text-gray-900 font-LatoBold mb-4 capitalize">
            Password Management
          </Typography>
            <label
              htmlFor="password"
              className="block text-sm font-LatoBold text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder='Enter your new Password here'
              className="h-10 mt-1 p-2 pl-4 w-full text-gray-900 border border-gray-300 font-LatoRegular rounded-md bg-transparent"
            />
          </div>
          <Typography className='text-red-600 text-base font-LatoRegular mt-2'>NB: Changes made here are permanent.</Typography>
          <Button size="sm" className="my-2 float-right rounded-full capitalize font-LatoBold bg-red-600 hover:bg-amber-300 transition ease-linear text-white hover:text-gray-900 hover:scale-110">save changes</Button>
    </form>
  )
}

export default EditArtistProfileCredentials