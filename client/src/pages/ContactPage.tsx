import NavBar from "../components/navbar/NavBar.tsx";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <div className="flex flex-col">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
