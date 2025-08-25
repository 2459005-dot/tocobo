import Header from "./components/Header";
import Hero from "./sections/Hero";
import Brand from "./sections/Brand";
import Products from "./sections/Products";
import Reviews from "./sections/Reviews";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import './styles/main.scss'

function App() {

  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="brand"><Brand /></section>
        <section id="products"><Products /></section>
        <section id="reviews"><Reviews /></section>
        <section id="contact"><Cta /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
