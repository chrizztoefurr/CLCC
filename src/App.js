import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'

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