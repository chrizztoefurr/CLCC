import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Shop from './components/Shop';
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
      <Shop />
      <Footer />
    </>
  )
};

export default App;