import React from 'react';
import AdminNavBar from '../../components/Navbar/AdminNavBar';
import ProfilePic from '../../assets/react.svg';

const AdminDashboard = () => {
  return (
    <div className='bg-slate-50 font-LatoRegular'>
    <AdminNavBar />
    <section className='flex flex-row items-center gap-4 p-6'>
      <img src={ ProfilePic } alt="Profile_pic" className='w-20 h-20 rounded-full bg-yellow-200' />
      <div className='flex flex-col text-slate-900'>
        <h2 className='font-LatoBold'>Bakari Mwamnyeto</h2>
        <h3 className='text-slate-400'>Administrator</h3>
      </div>

    </section>
    </div>
  )
}

export default AdminDashboard