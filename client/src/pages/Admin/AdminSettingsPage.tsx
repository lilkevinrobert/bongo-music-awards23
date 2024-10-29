import { Typography } from "@material-tailwind/react"
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1"
import Layout from "../../components/Layout/Layout"

const AdminSettingsPage = () => {
    return (
        <Layout>
            <BreadcrumbLevel1 currentPage="Settings" user="admin" />
            <div className="text-slate-900 px-4 h-auto">
                <div className="flex items-center justify-between">
                    <Typography
                        variant="h4"
                        className="text-sm md:text-xl capitalize font-LatoBold"
                    >
                        settings
                    </Typography>
                </div>

                {/* main section */}
                <p className="text-base text-gray-800 font-LatoRegular">work in progress...</p>
            </div>
        </Layout>
    )
}

export default AdminSettingsPage
