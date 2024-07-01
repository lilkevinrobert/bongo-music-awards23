import { Button, Typography } from "@material-tailwind/react"
import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2"
import Layout from "../../components/Layout/Layout"

const AdminAwardPage = () => {
  return (
    <Layout>
        <BreadcrumbLevel2 previousPage="awards" currentPage={"award"} />
        <form className="bg-transparent px-4 space-y-4">
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">title</Typography>
                <input type="text" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" placeholder="Name of Award Event" />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">location</Typography>
                <input type="text" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" placeholder="Enter a Location" />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">date</Typography>
                <input type="date" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">time</Typography>
                <input type="time" className="w-full h-[2rem] border-gray-300 font-LatoRegular text-sm rounded" />
            </div>
            <div className="flex flex-col items-start gap-2 font-LatoBold text-gray-900">
                <Typography className="capitalize">poster</Typography>
                <input type="file" className="w-full h-full border-gray-300 font-LatoRegular text-sm rounded" />
            </div>
            <Button variant="outlined" size="sm" className="w-full md:w-auto float-right font-LatoRegular text-sm capitalize rounded-full hover:bg-amber-400 transition ease-in-out">save changes</Button>
        </form>
    </Layout>
  )
}

export default AdminAwardPage