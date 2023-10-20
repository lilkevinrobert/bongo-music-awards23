import { Typography } from '@material-tailwind/react';
import AdminSidebar from '../../components/Navbar/AdminSidebar';

const AdminDashboardPage = () => {
  return (
    <div className='h-screen w-full border bg-red-200'>
        <AdminSidebar />
        <Typography>HElllloooo</Typography>
    </div>
  )
}

export default AdminDashboardPage