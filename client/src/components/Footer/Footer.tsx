import { Typography } from "@material-tailwind/react";
import { Footer as FlowBiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { MdPhone, MdLocationPin } from "react-icons/md";

const Footer = () => {
  const social_links = {
    instagram: `https://instagram.com/bongoawards?igshid=MzRlODBiNWFlZA==`,
    facebook: `https://www.facebook.com/bongoaward?mibextid=ZbWKwL`,
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FlowBiteFooter container className="rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="my-4 flex flex-col items-center">
            <h2 className="text-slate-900 font-LatoBold text-3xl">
              Bongo Music Awards
            </h2>
            <div className="self-start text-black font-semibold text-shadow-md antialiased flex flex-col py-4 gap-2">
              <div className="flex items-center justify-start gap-4">
                <MdPhone className="w-6 h-6" />
                <Typography>+255 714 456 680</Typography>
              </div>
              <div className="flex items-center justify-start gap-4">
                <HiMiniGlobeAlt className="w-6 h-6" />
                <Typography>josia@bma.com</Typography>
              </div>
              <div className="flex items-center justify-start gap-4">
                <MdLocationPin className="w-6 h-6" />
                <Typography>Bagamoyo Rd, Dar es Salaam</Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowBiteFooter.Title title="about" />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link href="./about">
                  Bongo Music Awards
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title="Follow us" />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link
                  href={social_links.instagram}
                  target="_blank"
                >
                  Instagram
                </FlowBiteFooter.Link>
                <FlowBiteFooter.Link
                  href={social_links.facebook}
                  target="_blank"
                >
                  Facebook
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title="Legal" />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link href="#">
                  Privacy Policy
                </FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">
                  Terms & Conditions
                </FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowBiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowBiteFooter.Copyright
            by="Bongo Music Awards"
            href="#"
            year={year}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowBiteFooter.Icon
              href={social_links.facebook}
              target="_blank"
              icon={BsFacebook}
            />
            <FlowBiteFooter.Icon
              href={social_links.instagram}
              target="_blank"
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </FlowBiteFooter>
  );
};

export default Footer;
