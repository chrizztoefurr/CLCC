import React from 'react';
import heroimg from '../images/heroimg.webp';

function Hero() {
  
  const style = {
    backgroundColor: '#C17B88'
  };
  
  return (
    <div>
      <header style={style}>
        <img className='hero-img' src={heroimg} alt='' />
        <section className='hero-text'>
          <p className='hero-brand'>Luxe Cotton Candy</p>
          <p className='sub-hero-brand'>Colorado's best cotton candy.</p>
        </section>
      </header>
    </div>
  )
};

export default Hero;