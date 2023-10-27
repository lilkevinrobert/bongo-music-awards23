import NavBar from '../components/Navbar/NavBar.tsx'
import Footer from '../components/Footer/Footer.tsx'
import About from '../components/About/About.tsx'

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