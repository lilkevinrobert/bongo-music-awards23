import { Typography } from "@material-tailwind/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiMiniGlobeAlt } from "react-icons/hi2";
import { MdPhone, MdLocationPin } from "react-icons/md";
import Logo from "/logo.png";
import { NavLink } from "react-router-dom";

const LINKS = [
  {
    title: "About",
    items: ["Bongo Music Awards", "Contacts"],
  },
  {
    title: "Follow us",
    items: ["Instagram", "Facebook"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms & Conditions"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const social_links = {
    instagram: `https://instagram.com/bongoawards?igshid=MzRlODBiNWFlZA==`,
    facebook: `https://www.facebook.com/bongoaward?mibextid=ZbWKwL`,
  };

  const renderLinks = () => {
    return LINKS.map((linkGroup, index) => (
      <div key={index}>
        <Typography
          variant="small"
          className="mb-3 font-LatoBold opacity-50 text-gray-950 uppercase"
        >
          {linkGroup.title}
        </Typography>
        <ul>
          {linkGroup.items.map((item, itemIndex) => (
            <li key={itemIndex} className="mb-2">
              <a
                href={getHref(linkGroup.title, item)}
                className="text-sm text-gray-950 font-LatoBold capitalize transition ease-in-out hover:underline hover:underline-offset-4"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const getHref = (title: string, item: string) => {
    switch (title) {
      case "About":
        if (item == "Bongo Music Awards") {
          return "/about";
        }
        if (item == "Contacts") {
          return "/contact";
        }
        return "/about";
      case "Follow us":
        if (item == "Instagram") {
          return social_links.instagram;
        }
        if (item == "Facebook") {
          return social_links.facebook;
        }
        return `/`;
      case "Legal":
        if (item == "Privacy Policy") {
          return `/privacy-policy`;
        }
        if (item == "Terms & Conditions") {
          return `/terms-conditions`;
        }
        return `/`;
      default:
        return "#";
    }
  };
  return (
    <footer className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-7xl py-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="bg-transprent flex flex-col items-start px-6 md:px-0 md:items-start justify-center">
            <NavLink to="/">
              <img
                src={Logo}
                alt="bongo music awards logo"
                className="text-sm w-36 mb-6"
              />
            </NavLink>
            <div className="md:self-start font-LatoRegular text-shadow-md antialiased flex flex-col py-4 gap-2">
              <div className="flex items-center justify-start gap-4">
                <MdPhone className="text-2xl text-gray-950 opacity-90" />
                <Typography className="text-gray-950">
                  +255 714 456 680
                </Typography>
              </div>
              <div className="flex items-center justify-start gap-4">
                <HiMiniGlobeAlt className="text-2xl text-gray-950 opacity-90" />
                <Typography className="text-gray-950">josia@bma.com</Typography>
              </div>
              <div className="flex items-center justify-start gap-4">
                <MdLocationPin className="text-2xl text-gray-950 opacity-90" />
                <Typography className="text-gray-950">
                  Bagamoyo Rd, Dar es Salaam
                </Typography>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4 bg-transparent text-base px-6 md:px-auto">
            {renderLinks()}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-LatoRegular text-gray-900 opacity-80 md:mb-0"
          >
            &copy; {currentYear} <a href="/">Bongo Music Awards</a>. All rights
            reserved.
          </Typography>
          <div className="flex gap-4 text-gray-900 sm:justify-center">
            <Typography
              as="a"
              href={social_links.facebook}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <BsFacebook className="text-xl" />
            </Typography>
            <Typography
              as="a"
              href={social_links.instagram}
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <BsInstagram className="text-xl" />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
