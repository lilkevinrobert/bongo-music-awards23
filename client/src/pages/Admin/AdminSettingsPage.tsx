import { Button, Typography } from "@material-tailwind/react"
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1"
import Layout from "../../components/Layout/Layout"
import { IoMdAdd } from "react-icons/io"
import AdminOccupationSettings from "../../components/Settings/AdminOccupationSettings"

const AdminSettingsPage = () => {
    return (
        <Layout>
            <BreadcrumbLevel1 currentPage="Settings" user="admin" />
            <div className="text-slate-900 px-4 h-auto">
                <div className="flex flex-col items-start gap-0">
                    <Typography
                        variant="h4"
                        className="text-sm md:text-xl capitalize font-LatoBold"
                    >
                        settings
                    </Typography>
                    <Typography className="text-sm font-LatoRegular">Manage details and preferences</Typography>
                </div>

                {/* main section */}
                <div className="py-2 my-4 border-t">
                    <AdminOccupationSettings />
                </div>
            </div>
        </Layout>
    )
}

export default AdminSettingsPage
