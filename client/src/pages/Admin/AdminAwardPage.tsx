import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Typography,
} from "@material-tailwind/react";
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import Layout from "../../components/Layout/Layout";
import { IoAdd } from "react-icons/io5";
import MiniFooter from "../../components/Footer/MiniFooter";
import { useState } from "react";

const AdminAwardPage = () => {
  const [openSponsorsDialog, setOpenSponsorsDialog] = useState(false);
  const handleOpenSponsorsDialog = () => setOpenSponsorsDialog((cur) => !cur);

  // Data from API...
  const sponsorsList = [
    {
      id: "eiow3oie4xc",
      name: "Sponsor's name",
      logo: "sponsor's logo",
    },
    {
      id: "eiow3oie4xc",
      name: "Sponsor's name",
      logo: "sponsor's logo",
    },
    {
      id: "eiow3oie4xc",
      name: "Sponsor's name",
      logo: "sponsor's logo",
    },
  ];
  const categoriesList: string[] = [
    "Bongo Flava",
    "Taarab",
    "R&B",
    "Singeli",
    "Reggae/Dance Hall",
    "Hip Hop & Rap",
    "Religious Songs",
    "Dancers",
    "Best Performer of the Year",
    "Honorary Awards",
  ];

  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="awards" currentPage={"award"} />
      <form className="bg-transparent px-4 pb-4 space-y-4">
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
            variant="outlined"
            size="sm"
            className="w-full md:w-auto font-LatoRegular text-sm capitalize rounded-full hover:bg-amber-400 transition ease-in-out"
          >
            save changes
          </Button>
        </div>
      </form>
      <hr className="mt-4" />
      {/* Sponsors section */}
      <section className="px-4 py-4">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          sponsors
        </Typography>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4 py-4">
          {/* Awards Sponsor's card list */}
          {sponsorsList.map((sponsor, i) => (
            <Card key={i} className="w-full h-auto shadow-none">
              <div className="w-full h-32">
                <img
                  src="#"
                  alt={sponsor.name}
                  loading="lazy"
                  className="bg-gray-200 h-full object-cover font-LatoRegular text-gray-900 rounded"
                />
              </div>
              <p className="text-gray-900 text-base font-LatoBold">
                {sponsor.name}
              </p>
              <Button
                size="sm"
                variant="outlined"
                className="my-2 rounded-full font-LatoRegular capitalize transition ease-in-out bg-amber-200 hover:bg-amber-300 border-amber-200"
              >
                remove
              </Button>
            </Card>
          ))}
          <div
            onClick={handleOpenSponsorsDialog}
            className="w-full h-48 transition ease-in-out cursor-pointer group rounded bg-transparent border-2 border-dashed border-spacing-4 border-gray-300 hover:border-gray-400 flex flex-col items-center justify-center"
          >
            <IoAdd className=" text-9xl text-gray-300 group-hover:text-gray-400 transition ease-in-out" />
          </div>
        </div>
      </section>
      <hr />
      {/* Categories section */}
      <section className="px-4 py-4">
        <Typography className="text-lg text-gray-900 font-LatoBold capitalize">
          categories
        </Typography>
        <div className="py-4 flex items-center flex-wrap gap-2">
          {categoriesList.map((category, i) => (
            <Typography
              key={i}
              className="font-LatoRegular text-sm text-gray-800 bg-amber-100 w-fit px-4 py-2 rounded-full normal-case"
            >
              {category}
            </Typography>
          ))}
          <span className="w-8 h-8 flex flex-col items-center justify-center rounded-full cursor-pointer shadow transiton ease-in-out bg-gray-900 hover:bg-gray-950">
            <IoAdd className="text-white text-lg" />
          </span>
        </div>
      </section>
      <MiniFooter />

      {/* Dialogs */}
      <Dialog
        size="xs"
        open={openSponsorsDialog}
        handler={handleOpenSponsorsDialog}
        className="bg-transparent shadow-none"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h6"
              color="blue-gray"
              className="font-LatoBold"
            >
              Add Awards Sponsor(s)
            </Typography>
            <Typography
              className="mb-3 font-LatoRegular"
              variant="paragraph"
              color="gray"
            >
              Select appropriate sponsor form the list below.
            </Typography>

            {/* Available Sponsor's */}
            <div className="grid grid-cols-2 gap-2 bg-gray-100 rounded p-4">
              <div className="font-LatoRegular w-full">
                <Checkbox
                  label="Sponsor One"
                  crossOrigin={undefined}
                  className="mr-2"
                />
              </div>
              <div className="font-LatoRegular w-full">
                <Checkbox
                  label="Sponsor Two"
                  crossOrigin={undefined}
                  className="mr-2"
                />
              </div>
              <div className="font-LatoRegular w-full">
                <Checkbox
                  label="Sponsor Three"
                  crossOrigin={undefined}
                  className="mr-2"
                />
              </div>
              <div className="font-LatoRegular w-full">
                <Checkbox
                  label="Sponsor Four"
                  crossOrigin={undefined}
                  className="mr-2"
                />
              </div>
            </div>
            <CardFooter className="py-0 flex flex-row items-center justify-end gap-2">
            <Button variant="filled" onClick={handleOpenSponsorsDialog} className="rounded-full font-LatoBold bg-gray-300 hover:bg-gray-300 border-gray-300 hover:border-gray-800 text-gray-800">
              cancel
            </Button>
            <Button variant="filled" className="rounded-full font-LatoBold">
              Add
            </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </Dialog>
    </Layout>
  );
};

export default AdminAwardPage;
