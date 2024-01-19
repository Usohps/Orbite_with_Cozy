// import React from 'react'
import bgVideo from "./assets/bg_video.mp4";
import Banner2 from "./components/Banners/Banner";
import Banner from "./components/Banners/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  // npm i aos for smooth animations here
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <Hero />
      </div>
      {/* Service Section */}
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}

export default App;
