import HeroSection from "../component/HeroSection"
import Services from "../component/Services"
import Footer from "../sheared/Footer"
import Navbar from "../sheared/Navbar"


const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Footer/>
    </div>
  )
}

export default Home
