import React from 'react';
import cloud from '../images/herobackground.png'

function Hero() {
  return (
    <section className='hero-container'>
      <img src={cloud} alt='fluffy pink cotton candy cloud' className='hero-img' />
      <div className='hero-text'>
        <h1>Let us make your events fun with gourmet cotton candy.</h1>
          <p className='hero-sub-text'>Colorado's luxurious cotton candy cart</p>
        <button className='hero-btn'>ASK ABOUT YOUR EVENT</button>
      </div>
    </section>
  )
};

export default Hero;