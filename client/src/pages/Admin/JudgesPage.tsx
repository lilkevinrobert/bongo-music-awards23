import { Breadcrumbs, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import Layout from '../../components/Layout/Layout'
import JudgesDataTable from '../../components/Table/JudgesDataTable'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1';

const JudgesPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage='judges' />
      <div className="text-slate-900 px-4">
        <Typography variant="h3">Judges</Typography>
        <JudgesDataTable />
      </div>
    </Layout>
  )
}

export default JudgesPage