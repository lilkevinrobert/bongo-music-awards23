
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import NavBar from "../components/navbar/NavBar.tsx";

const AboutPage = () => {
  return (
    <div className='w-full h-screen'>
        <NavBar />
        <div className="flex flex-col">
            <About />
            <Footer />
        </div>
    </div>
  )
}

export default AboutPage