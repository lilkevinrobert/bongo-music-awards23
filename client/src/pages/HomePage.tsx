import React from 'react';
import Banner from '../components/Banner/Banner';
import Nominees from '../components/Sections/Nominees';
import Footer from '../components/Footer/Footer';
import NavBar from "../components/navbar/NavBar";

const HomePage = () => {
  return (
    <div className='w-full h-screen'>
        <NavBar />
        <div className='flex flex-col'>
            <Banner />
            {/* <Nominees /> */}
            <Footer />
        </div>
    </div>
  )
}

export default HomePage