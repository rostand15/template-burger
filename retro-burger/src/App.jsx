import DemoBar from "./components/DemoBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Differentials from "./components/Differentials";
import Featured from "./components/Featured";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <DemoBar />
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Featured />
        <Menu />
        <About />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
