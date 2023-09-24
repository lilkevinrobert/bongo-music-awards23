import React from 'react';
import NavBar from '../components/navbar/Navbar';

const HomePage = () => {
  return (
    <div className='w-full h-screen'>
        <NavBar />
        <div className='border flex flex-col md:flex-row'>
            <div>
                banner for the event
            </div>
            <div>
                content
            </div>
        </div>
    </div>
  )
}

export default HomePage