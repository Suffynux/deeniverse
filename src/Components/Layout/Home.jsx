import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import LandingPageAboutUs from '../About us/LandingPageAboutUs'
import LandingCoures from '../Our Courses/LandingCoures'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer'
import FaqSection from '../Faqs/FaqSection'
import ContactUs from '../Contact Us/Contact'
import AboutUs from '../About us/AboutUs'
import PrayerTimes from "../../Components/Prayer/PrayerTimes"
import Quiz from '../Quizes/Quiz'
const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <LandingPageAboutUs/>    
        <LandingCoures/>
        <FaqSection/>
        {/* Footer */}
        {/* <Quiz/> */}
        <Footer />
        </div>
  )
}

export default Home