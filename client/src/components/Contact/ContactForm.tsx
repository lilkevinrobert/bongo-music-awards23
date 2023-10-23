import {
  Typography,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <section className="w-full lg:w-8/12 h-auto py-4 px-8 bg-slate-50 text-slate-900">
      <form className="w-full flex flex-col">
        <Typography variant="h5" className="capitalize pb-4">
          contact information
        </Typography>
        <div className="mb-1 grid grid-cols-2 gap-6">
          <div className="mb-1 w-full">
            <Typography variant="h6" className="mb-3 text-slate-500">
              First name
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
          <div className="mb-1 w-full">
            <Typography variant="h6" className="mb-3 text-slate-500">
              Last name
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
          <div className="mb-1 w-full">
            <Typography variant="h6" className="mb-3 text-slate-500">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
          <div className="mb-1 w-full">
            <Typography variant="h6" className="mb-3 text-slate-500">
              Phone number
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
        </div>
        <div>
          <Typography variant="h5" className="py-6">
            How can we help you?
          </Typography>
          <Textarea size="lg" label="" />
        </div>
        <Button fullWidth className="w-1/3 self-end py-4 my-6 bg-slate-800 hover:bg-yellow-400 transition ease-in-out">
          get in touch
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
