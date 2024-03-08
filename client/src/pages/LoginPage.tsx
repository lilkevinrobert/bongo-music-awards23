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
import TextLogo from "../components/Logo/TextLogo";

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
    <section className="px-4 w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full lg:w-1/2 shadow-none">
        <div className="w-full flex flex-row items-center justify-center my-4">
          <NavLink to="/">
            <TextLogo />
          </NavLink>
        </div>
        <Tabs id="custom-animation" value="html">
          <TabsHeader className="text-slate-900 bg-gradient-to-r from-yellow-400 to-white">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="hover:bg-white hover:rounded-md"
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
        </Tabs>
      </div>
    </section>
  );
};

export default LoginPage;
