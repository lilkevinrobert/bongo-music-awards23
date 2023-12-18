import { Breadcrumbs, Typography } from "@material-tailwind/react"
import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import DataTable from "../../components/Table/DataTable"

const NominatorsPage = () => {
  return (
    <Layout>
      <div className=" text-slate-900 py-2">
        <Breadcrumbs separator="-">
          <NavLink to="../dashboard" className="opacity-60 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </NavLink>
          <NavLink to="../dashboard" className="opacity-60 px-2">
            <span>Admin</span>
          </NavLink>
          <span className="px-2">Nominators</span>
        </Breadcrumbs>
      </div>
      <div className="text-slate-900 px-4">
        <Typography variant="h3">Artists</Typography>
        <DataTable />
      </div>
    </Layout>
  )
}

export default NominatorsPage