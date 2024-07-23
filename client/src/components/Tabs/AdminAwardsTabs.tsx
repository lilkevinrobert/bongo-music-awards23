import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react"
import AllAwards from "../Awards/AllAwards";
import ActiveAwards from "../Awards/ActiveAwards";

const AdminAwardsTabs = () => {
    const [activeTab, setActiveTab] = useState("all")
    const data = [
        {
            label: "All",
            value: "all",
            desc: <AllAwards />
        },
        {
            label: "Active",
            value: "active",
            desc: <ActiveAwards />
        },
    ];
  return (
    <Tabs value={activeTab} className="bg-transparent w-full pt-4">
        <TabsHeader className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-6/12 lg:w-3/12 font-LatoBold"
        indicatorProps={{
            className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}>
            {data.map(({label, value}) => (
                <Tab key={value} value={value} onClick={()=>setActiveTab(value)} className={activeTab===value ? "text-gray-900" : ""}>
                    {label}
                </Tab>
            ))}
        </TabsHeader>
        <TabsBody className="bg-slate-50">
            {
                data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>{desc}</TabPanel>
                ))
            }
        </TabsBody>
    </Tabs>
  )
}

export default AdminAwardsTabs