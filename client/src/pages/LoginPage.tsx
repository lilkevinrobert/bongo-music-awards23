import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Login from "../components/Login/Login";

const LoginPage = () => {
  const data = [
    {
      label: "LOGIN",
      value: "login",
      desc: <Login />
    },
    {
      label: "REGISTER",
      value: "register",
      desc: `register`,
    },
  ];
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white text-red-600">
      <div className="w-1/2 shadow">
        <Tabs id="custom-animation" value="html">
          <TabsHeader className="text-slate-950">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
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
              <TabPanel key={value} value={value}>
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
