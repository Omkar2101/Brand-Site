import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer'
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' min-h-screen w-full bg-zinc-800 '>
      
      <Navbar></Navbar>
      <Landing></Landing>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
      <Features></Features>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  )
}

export default App