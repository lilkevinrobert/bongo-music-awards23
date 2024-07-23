import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import AwardEventDetails from "../Awards/AwardEventDetails";
import AdminNominationsView from "../Nomination/AdminNominationsView";

const AdminAwardTabs = () => {
  const [activeTab, setActiveTab] = useState("details");
  const data = [
    {
      label: "Event Details",
      value: "details",
      desc: <AwardEventDetails />,
    },
    {
      label: "Nominations",
      value: "nominations",
      desc: <AdminNominationsView />,
    },
  ];
  return (
    <Tabs value={activeTab} className="bg-transparent w-full pt-0">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-10/12 lg:w-4/12 font-LatoBold"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-white">
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default AdminAwardTabs;
