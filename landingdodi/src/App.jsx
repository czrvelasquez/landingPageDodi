import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OfertaEducativa from './components/OfertaEducativa';
import Testimonios from './components/Testimonios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import PromoFloatButton from './components/PromoFloatButton';
import WaveDivider from './components/WaveDivider';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <Loader onFinish={() => setLoading(false)} />}</AnimatePresence>
      {!loading && (
        <div className="App">
          <Navbar />
          <Hero />
          <WaveDivider />
          <About />
          <WaveDivider flip />
          <OfertaEducativa />
          <WaveDivider />
          <Testimonios />
          <WaveDivider flip />
          <Contacto />
          <Footer />
          <WhatsappButton />
          <PromoFloatButton />
        </div>
      )}
    </>
  );
}

export default App;
