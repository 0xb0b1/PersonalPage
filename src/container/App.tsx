import React, { useEffect } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
