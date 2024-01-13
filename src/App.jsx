// import React from 'react'
import bgVideo from "./assets/bg_video.mp4"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services/Services"

function App() {
  return (
    <div>
      <div className="h-[700px] relative">
        <video className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar/>
        <Hero/>
      </div>
      {/* Service Section */}
      <Services/>
      
    </div>
  )
}

export default App