import { Footer as FlowBiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const social_links = {
    "instagram": `https://instagram.com/bongoawards?igshid=MzRlODBiNWFlZA==`,
    "facebook": `https://www.facebook.com/bongoaward?mibextid=ZbWKwL`
  };
  const date = new Date();
  const year = date.getFullYear();
  return (
    <FlowBiteFooter container className="rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="my-4">
            <h2 className="text-slate-900 font-LatoBold text-3xl">Bongo Music Awards</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FlowBiteFooter.Title title="about" />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link href="#">Bongo Music Awards</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href="#">Tailwind CSS</FlowBiteFooter.Link>
              </FlowBiteFooter.LinkGroup>
            </div>
            <div>
              <FlowBiteFooter.Title title="Follow us" />
              <FlowBiteFooter.LinkGroup col>
                <FlowBiteFooter.Link href={social_links.instagram} target="_blank">Instagram</FlowBiteFooter.Link>
                <FlowBiteFooter.Link href={social_links.facebook} target="_blank">Facebook</FlowBiteFooter.Link>
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
          <FlowBiteFooter.Copyright by="Bongo Music Awards" href="#" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowBiteFooter.Icon href={social_links.facebook} target="_blank" icon={BsFacebook} />
            <FlowBiteFooter.Icon href={social_links.instagram} target="_blank" icon={BsInstagram} />
            {/* <FlowBiteFooter.Icon href="#" icon={BsTwitter} /> */}
          </div>
        </div>
      </div>
    </FlowBiteFooter>
  );
};

export default Footer;
