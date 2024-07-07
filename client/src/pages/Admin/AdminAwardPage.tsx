import BreadcrumbLevel2 from "../../components/Breadcrumbs/BreadcrumbLevel2";
import Layout from "../../components/Layout/Layout";
import MiniFooter from "../../components/Footer/MiniFooter";
import AdminAwardTabs from "../../components/Tabs/AdminAwardTabs";

const AdminAwardPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel2 previousPage="awards" currentPage={"award"} />
      <div className="bg-white text-gray-500">
        <AdminAwardTabs />
      </div>
      <MiniFooter />
    </Layout>
  );
};

export default AdminAwardPage;
