import Banner from '../components/Banner/Banner';
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