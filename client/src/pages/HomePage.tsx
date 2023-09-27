import React from 'react';
import Banner from '../components/Banner/Banner';
import NavBar from '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div className='w-full h-screen'>
        <NavBar />
        <div className='flex flex-col'>
            <Banner />
            <div className='h-auto p-16 md:p-32 bg-slate-900 text-slate-50 h-screen'>
                content
            </div>
        </div>
    </div>
  )
}

export default HomePage