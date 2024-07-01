import { Typography } from "@material-tailwind/react";
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1";
import Layout from "../../components/Layout/Layout";
import AdminProfile from "../../components/Profile/AdminProfile";

const ProfilePage = () => {
    return (
        <Layout>
            <BreadcrumbLevel1 currentPage="profile" />
            <div className="text-slate-900 px-4 h-auto">
                <Typography variant="h4" className="text-lg font-LatoBold">My Profile</Typography>
                <div className="py-4">
                <AdminProfile />
                </div>
            </div>
        </Layout>
    )
};

export default ProfilePage;