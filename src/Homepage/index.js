import "../assets/css/aos.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/font-awesome.min.css"
import "../assets/css/tooplate-gymso-style.css"
import About from "../components/About";
import Class from "../components/Class";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MenuBar from "../components/MenuBar";
import Modal from "../components/Modal";
import Schedule from "../components/Schedule";

export default function Homepage(){
    return(
<div>
    {/* MENU BAR */}
    <MenuBar/>
    {/* HERO */}
    <Hero/>
  {/* ABOUT */}
    <About/>
  {/* CLASS */}
  <Class/>
  {/* SCHEDULE */}
  <Schedule/>
  {/* CONTACT */}
  <Contact/>
  {/* FOOTER */}
  <Footer/>
  {/* Modal */}
  <Modal/>
</div>

    )
}