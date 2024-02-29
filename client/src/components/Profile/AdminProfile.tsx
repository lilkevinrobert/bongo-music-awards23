import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import TopographyDarkBackground from "/topography-dark.svg";

const AdminProfile: React.FC = () => {
  const imgLink =
  "https://images.unsplash.com/photo-1513152697235-fe74c283646a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww";

  return (
    <div className="w-full h-auto grid grid-cols-2 gap-2 bg-transparent">
      <div className="w-full flex flex-col gap-0">
        <Card className="relative w-full h-fit rounded-t-lg shadow-md bg-white col-span-2">
          {/* background pattern */}
          <img
            className={`w-full h-28 rounded-t-lg object-cover object-center bg-amber-300`}
            src={TopographyDarkBackground}
            loading="lazy"
          />
          {/* Profile picture */}
          <img
            className=" h-28 w-28 rounded-3xl object-cover object-center absolute top-10 ml-6 border-4 border-white shadow-md"
            src={imgLink}
            loading="lazy"
            alt="profile pic"
          />
          <div className="px-6 pt-14 pb-4">
            <Typography className="text-lg font-LatoBold">
              John Mandonga
            </Typography>
            <Typography className="text-md font-LatoRegular capitalize">
              system administrator
            </Typography>
            <div className="hidden flex-row items-center py-4 gap-2">
              <input
                type="file"
                name="profile_pic"
                className="h-10 rounded-md bg-amber-200 font-LatoRegular"
              />
              <Button
                size="md"
                className="capitalize transition ease-in-out hover:bg-slate-800"
              >
                Save
              </Button>
            </div>
          </div>
        </Card>
        {/* Delete Account */}
        <Card className="w-full bg-white h-fit px-6 py-2 rounded-b-lg shadow-md">
                <div className="py-2">
                  <Typography className="capitalize font-LatoBold">
                    delete account
                  </Typography>
                  <Typography className="text-sm font-LatoRegular">
                    Permanently delete this account
                  </Typography>
                </div>
                <Typography
                  as="p"
                  className="text-sm font-LatoRegular text-red-600"
                >
                  Once you delete this account, all of its resources and data
                  will be permanently deleted.
                </Typography>
                <div className="flex flex-col md:flex-row items-center justify-between my-2">
                  <Typography className="font-LatoRegular text-sm text-red-600">
                    This action is irreversible.
                  </Typography>
                  <Button
                  size="sm"
                    className="flex flex-row items-center gap-2 capitalize my-2 transition ease-in-out bg-amber-600 hover:bg-amber-800"
                  >
                    <MdDelete className="hidden lg:block text-3xl text-white" />
                    <Typography className="text-sm font-LatoBold">delete account</Typography>
                  </Button>
                </div>
              </Card>
      </div>
      <div className="w-full">edit form here</div>
    </div>
  );
};

export default AdminProfile;
