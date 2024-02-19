import React from "react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import { Button, Card, Typography } from "@material-tailwind/react";

interface judgeData {
  firstname: string;
  middlename: string;
  lastname: string;
  phone: string;
  organization: string;
  position: string;
  expertise: string;
  event: string;
  role: string;
  bio: string;
}

const JudgePage: React.FC = () => {
  // fetch data here
  const data: judgeData = {
    firstname: "john",
    middlename: "francis",
    lastname: "doe",
    phone: "+255 714 540 218",
    organization: "bma company ltd",
    position: "ceo",
    expertise: "music industry",
    event: "bongo music awards 2024",
    role: "judge",
    bio: "a very long bio here",
  };
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="judge" />
      <div className="text-slate-900 px-4 h-auto">
        <Typography variant="h5" className="capitalize">
          edit judge details
        </Typography>
        <div className="w-full h-full my-4 flex flex-col md:flex-row gap-4">
          {/* Personal Information */}
          <Card className="w-full h-fit md:w-1/4 px-6 py-8 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 rounded-lg">
            <Typography className="capitalize pb-4">
              Personal information
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.firstname}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">
                  middle name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.firstname}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">surname</label>
                <input
                  type="text"
                  name="lastname"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.lastname}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">Role</label>
                <input
                  type="text"
                  name="role"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.role}
                />
              </div>
              <div className="py-2">
                <Button
                  size="sm"
                  fullWidth
                  className="bg-green-500 capitalize transition ease-in-out hover:bg-green-700"
                >
                  saves changes
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Informtion */}
          <Card className="bg-white h-fit px-6 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 rounded-lg">
            <Typography className="capitalize px-0 py-8">
              Contact information
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">
                  organization
                </label>
                <input
                  type="text"
                  name="organization"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.organization}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">
                  position
                </label>
                <input
                  type="text"
                  name="position"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.position}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">phone</label>
                <input
                  type="text"
                  name="phone"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.phone}
                />
              </div>
              <div className="py-2 mb-4">
                <Button size="sm" fullWidth className="bg-green-500 capitalize transition ease-in-out hover:bg-green-700">saves changes</Button>
              </div>
            </div>
          </Card>

          {/* Bio & Expertise */}
          <div className="w-full flex flex-col gap-4">
            <Card className="bg-white h-fit px-6 py-8 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 rounded-lg">
              <Typography>Bio</Typography>
              <textarea
                className="rounded mt-4 border-slate-300 font-LatoRegular"
                value={data.bio}
              ></textarea>
                 <div className="pt-4">
                <Button size="sm" className="bg-green-500 float-right capitalize transition ease-in-out hover:bg-green-700">saves changes</Button>
              </div>
            </Card>
            <Card className="bg-white h-fit px-6 py-8 bg-opacity-25 backdrop-filter backdrop-blur-md border border-gray-300 rounded-lg flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">
                  expertise
                </label>
                <input
                  type="text"
                  name="expertise"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.expertise}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-LatoBold capitalize">event</label>
                <input
                  type="text"
                  name="event"
                  className="h-10 border-slate-300 rounded-lg font-LatoRegular pl-4"
                  value={data.event}
                />
              </div>
              <div className="pt-4">
                <Button size="sm" className="bg-green-500 float-right capitalize transition ease-in-out hover:bg-green-700">saves changes</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JudgePage;
