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
        <section id="Hero"><Hero /></section>
        <section id="Brand"><Brand /></section>
        <section id="Products"><Products /></section>
        <section id="Reviews"><Reviews /></section>
        <section id="Cta"><Cta /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
