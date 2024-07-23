import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { NavLink } from "react-router-dom";
import Logo from "/logo.png";
import TopographyDarkBackground from "/topography-dark.svg";

const LoginPage = () => {
  const data = [
    {
      label: "LOGIN",
      value: "login",
      desc: <Login />,
    },
    {
      label: "REGISTER",
      value: "register",
      desc: <Register />,
    },
  ];
  return (
    <section className="relative px-4 w-full h-screen flex flex-col items-center justify-center bg-white">
      <img
        className={`absolute w-full h-full top-0 left-0 z-0 object-cover object-center bg-yellow-200 opacity-5`}
        src={TopographyDarkBackground}
        loading="lazy"
      />
      <div className="w-full lg:w-1/2 shadow-none z-10">
        <div className="w-full flex flex-row items-center justify-center my-4">
          <NavLink to="/" className="cursor-pointer">
            <img src={Logo} alt="bongo music awards logo" className="text-sm w-36" />
          </NavLink>
        </div>
        <Tabs id="custom-animation" value="html">
          <TabsHeader className="text-gray-950 bg-gradient-to-r from-yellow-300 to-white">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="hover:bg-white hover:rounded-md text-gray-900 font-LatoBold"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
            className="bg-white rounded-md shadow"
          >
            {data.map(({ value, desc }) => (
              <TabPanel
                key={value}
                value={value}
                className="flex items-center justify-center"
              >
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
          <p className="font-LatoRegular text-gray-600 text-xs text-center pt-4">&copy; All rights reserved.</p>
        </Tabs>
      </div>
    </section>
  );
};

export default LoginPage;
