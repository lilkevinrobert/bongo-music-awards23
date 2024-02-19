import { Breadcrumbs, Typography } from "@material-tailwind/react"
import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import NominatorsDataTable from "../../components/Table/NominatorsDataTable"
import BreadcrumbLevel1 from "../../components/Breadcrumbs/BreadcrumbLevel1"

const NominatorsPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage="nominators" />
      <div className="text-slate-900 px-4">
      <Typography variant="h4">Nominators</Typography>
        <NominatorsDataTable />
      </div>
    </Layout>
  )
}

export default NominatorsPage