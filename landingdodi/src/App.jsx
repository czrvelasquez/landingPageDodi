import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OfertaEducativa from './components/OfertaEducativa';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

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
    </div>
  );
}

export default App;
