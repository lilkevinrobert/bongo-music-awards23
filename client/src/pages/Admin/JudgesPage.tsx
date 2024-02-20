import { Typography } from '@material-tailwind/react'
import Layout from '../../components/Layout/Layout'
import JudgesDataTable from '../../components/Table/JudgesDataTable'
import BreadcrumbLevel1 from '../../components/Breadcrumbs/BreadcrumbLevel1';

const JudgesPage = () => {
  return (
    <Layout>
      <BreadcrumbLevel1 currentPage='judges' />
      <div className="text-slate-900 px-4">
        <Typography variant="h4" className="text-xl">Judges</Typography>
        <JudgesDataTable />
      </div>
    </Layout>
  )
}

export default JudgesPage