import React from 'react';
import cloud from '../images/herobackground.png'

function Hero() {
  return (
    <section className='hero-container'>
      <img src={cloud} alt='fluffy pink cotton candy cloud' className='hero-img' />
      <div className='hero-text'>
        <h1>Let's make your events magic with gourmet cotton candy.</h1>
          <p className='hero-sub-text'>Colorado's luxe cotton candy</p>
        <a href='#form'><button className='hero-btn'>ASK ABOUT YOUR EVENT</button></a>
      </div>
    </section>
  )
};

export default Hero;