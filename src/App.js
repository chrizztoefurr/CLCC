import React from 'react';
import NavBar from './components/NavBar';
import './index.css'
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Events />
      <Contact />
      <Footer />
    </>
  )
};

export default App;