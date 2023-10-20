import { Typography } from '@material-tailwind/react'
import React from 'react'
import AdminSidebar from '../Navbar/AdminSidebar'

const Layout = ({children}) => {
  return (
    <div className='h-screen w-full border bg-transparent grid grid-cols-2'>
        <AdminSidebar />
        <section className='w-7/12 p-10 scroll-mx-14'>{children}</section>
    </div>
  )
}

export default Layout