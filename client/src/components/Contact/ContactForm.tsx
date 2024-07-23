import { Typography, Button } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <section className="w-full lg:w-8/12 h-auto py-6 px-8 bg-transparent text-slate-900">
      <form className="w-full flex flex-col">
        <Typography
          variant="h5"
          className="capitalize pb-4 text-xl font-LatoBold"
        >
          contact information
        </Typography>
        <div className="mb-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-1 w-full">
            <Typography
              variant="h6"
              className="mb-3 text-slate-800 font-LatoBold"
            >
              First name
            </Typography>
            <input
              type="text"
              placeholder="Your First name"
              className="w-full rounded-lg border border-slate-600 font-LatoRegular"
            />
          </div>
          <div className="mb-1 w-full">
            <Typography
              variant="h6"
              className="mb-3 text-slate-800 font-LatoBold"
            >
              Last name
            </Typography>
            <input
              type="text"
              placeholder="Your Last name"
              className="w-full rounded-lg border border-slate-600 font-LatoRegular"
            />
          </div>
          <div className="mb-1 w-full">
            <Typography
              variant="h6"
              className="mb-3 text-slate-800 font-LatoBold"
            >
              Email
            </Typography>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-lg border border-slate-600 font-LatoRegular"
            />
          </div>
          <div className="mb-1 w-full">
            <Typography
              variant="h6"
              className="mb-3 text-slate-800 font-LatoBold"
            >
              Phone number
            </Typography>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full rounded-lg border border-slate-600 font-LatoRegular"
            />
          </div>
        </div>
        <div>
          <Typography variant="h5" className="py-6 text-xl font-LatoBold">
            How can we help you?
          </Typography>
          <textarea className="w-full rounded-lg border border-slate-600 font-LatoRegular" />
        </div>
        <Button
          fullWidth
          size="md"
          className="w-auto my-4 self-end font-LatoBold rounded-full text-white hover:text-gray-900 transition ease-in-out bg-gray-900 hover:bg-yellow-300"
        >
          get in touch
        </Button>
      </form>
    </section>
  );
};

export default ContactForm;
