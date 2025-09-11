import Header from "./components/Header";
import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import './styles/main.scss'
import TopBanner from "./components/TopBanner";
import { useState, useEffect } from "react";
import TopBtn from "./components/TopBtn";
import Hello from "./sections/Hello";
import Collection from "./sections/Collection";
import Instargram from "./sections/Instargram";
import Skincare from "./sections/Skincare";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  const [topBanner, setTopBanner] = useState("")

  const upTopBanner = () => {
    setTopBanner("up")
  }

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      setIsScrolled(scrollTop > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const [mNavOpen, setMNavOpen] = useState(false)

  const handleNavOpen = () => setMNavOpen(true)
  const handleNavClose = () => setMNavOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) setMNavOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mNavOpen ? 'hidden' : ''
  }, [mNavOpen])

  useEffect(() => {
    Aos.init({
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  }, [])

  return (
    <div className={`app-container ${topBanner} ${isScrolled ? "scrolled" : ""}`}>
      <TopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header
        mNavOpen={mNavOpen}
        onNavOpen={handleNavOpen}
        onNavClose={handleNavClose}
      />
      <main>
        <section id="Hero" className="Section"><Hero /></section>
        <section id="Cta" className="Section"><Cta /></section>
        <section id="Hello" className="Section"><Hello /></section>
        <section id="Collection" className="Section"><Collection /></section>
        <section id="Skincare" className="Section"><Skincare /></section>
        <section id="Instar" className="Section"><Instargram /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
