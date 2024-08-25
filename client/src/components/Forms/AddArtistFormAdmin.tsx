import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react"

const AddArtistFormAdmin = () => {
  return (
    <form className="pl-4">
      <Typography className="font-LatoBold text-lg capitalize text-gray-900">
        add artist
      </Typography>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          personal information
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="flex w-4/12 flex-col">
            <label className="font-LatoBold text-base capitalize text-gray-900">
              Profile Picture
            </label>
            <input
              type="file"
              name="profile_picture"
              className="mt-1 w-full rounded-md p-2 font-LatoRegular"
            />
            <div className="w-full h-full bg-gray-400 rounded"></div>
          </div>
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                first name
              </label>
              <input
                type="text"
                name="first_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                middle name
              </label>
              <input
                type="text"
                name="middle_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                last name
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                gender
              </label>
              <select
                name="gender"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                date of Birth
              </label>
              <input
                type="date"
                name="date_of_birth"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                username
              </label>
              <input
                type="text"
                name="username"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                password
              </label>
              <input
                type="password"
                name="password"
                className="mt-1 w-full rounded-md border border-gray-300 p-2 font-LatoRegular"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          contact information
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                phone number
              </label>
              <input
                type="tel"
                name="phone_number"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                region
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                district
              </label>
              <select
                name="district"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                ward
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                street
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                house number
              </label>
              <select
                name="house_number"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 pr-4">
        <Typography className="w-fit rounded-t-md bg-amber-200 px-2 font-LatoBold text-base capitalize text-gray-800">
          artist profile
        </Typography>
        <div className="flex w-full gap-4 rounded-md bg-slate-50 p-4">
          <div className="grid w-full grid-cols-2 items-center justify-between gap-2">
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                writer
              </label>
              <input
                type="tel"
                name="phone_number"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                record label
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                official website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                debut year
              </label>
              <input
                type="text"
                name="last_name"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                stage name
              </label>
              <select
                name="district"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                albums
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                singles
              </label>
              <select
                name="ward"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                bio
              </label>
              <select
                name="house_number"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                genre
              </label>
              <select
                name="house_number"
                className="rounded-md border border-gray-300 font-LatoRegular text-base capitalize text-gray-900"
              >
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                spotify website link
              </label>
              <input
                type="text"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                apple website link
              </label>
              <input
                type="text"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                youtube website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="font-LatoBold text-base capitalize text-gray-900">
                boomplay website link
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end mb-10 bg-slate-200 py-4 px-4 mx-4 rounded-md">
      <Button size="sm" className="text-xs font-LatoBold capitalize float-right hover:bg-amber-400 transition ease-in-out hover:text-gray-900">save changes</Button>
      </div>
    </form>
  );
};

export default AddArtistFormAdmin;