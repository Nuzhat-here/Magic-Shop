import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home.jsx';
import Menu from './component/Menu/Menu.jsx';
import Banner from './component/Banner/Banner.jsx';
import Feedback from './component/Feedback/Feedback.jsx';
import Footer from './component/Footer/Footer.jsx';



const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
    );
  })
  return (
    <div className=' bg-white duration-200 overflow-y-hidden'>
      <Navbar />
      <Home />
      <Menu />  
      <Banner />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
