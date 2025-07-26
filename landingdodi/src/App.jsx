import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OfertaEducativa from './components/OfertaEducativa';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <OfertaEducativa />
      <Testimonios />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
