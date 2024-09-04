import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import './index.css'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Events />
    </>
  )
};

export default App;