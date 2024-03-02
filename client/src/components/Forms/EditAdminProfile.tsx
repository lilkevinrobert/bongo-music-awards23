import { Button, Card, Typography } from "@material-tailwind/react";

const EditAdminProfile = () => {
  return (
    <Card className="rounded-lg px-6 py-6">
      <Typography className="text-slate-700 pb-3 capitalize">
        edit profile details
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            Firstname
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            middle name
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            lastname
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            Email
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            address
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            status
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            phone
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            professionalism
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            role
          </Typography>
          <input
            type="text"
            className="border border-gray-300 h-8 w-full rounded-md"
          />
        </div>
        <div>
          <Typography className="text-md text-slate-600 font-LatoBold capitalize">
            gender
          </Typography>
          <select className="border border-gray-300 p-2 h-10 w-full rounded-md font-LatoRegular sm:text-sm">
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="w-full py-4">
        <Button size="sm" className="float-right text-sm font-LatoBold capitalize transition ease-in-out bg-amber-600 hover:bg-amber-800">
          save changes
        </Button>
      </div>
    </Card>
  );
};

export default EditAdminProfile;
