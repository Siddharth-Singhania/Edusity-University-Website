import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/videoPlayer/VideoPlayer";

 

function App(){
  const [play,setplay] = useState(false)

   

  return(
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What We Offer'/>
        <Programs/>
        <About setplay={setplay}/>
        <Title subtitle='Gallary' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Students Say'/>
        <Testimonials/>
        <Title subtitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer play={play} setplay={setplay}/>
    </div>
  )
}

export default App;