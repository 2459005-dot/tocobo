import Header from "./components/Header";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import './styles/main.scss'
import TopBanner from "./components/TopBanner";
import { useState, useEffect } from "react";
import TopBtn from "./components/TopBtn";
import Hello from "./sections/Hello";
import Collection from "./sections/Collection";

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

  return (
    <div className={`app-container ${topBanner} ${isScrolled ? "scrolled" : ""}`}>
      <TopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header />
      <main>
        <section id="Hero" className="Section"><Hero /></section>
        <section id="Cta" className="Section"><Cta /></section>
        <section id="Hello" className="Section"><Hello /></section>
        <section id="Collection" className="Section"><Collection /></section>
        <section id="Brand" className="Section"><Brand /></section>
        <section id="Products" className="Section"><Products /></section>
        <section id="Reviews" className="Section"><Reviews /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
