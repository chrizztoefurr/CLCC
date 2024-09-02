import React from 'react';
import freeFrom from '../images/image0.jpeg'

function About() {

  const style = {
    backgroundColor: '#FFEBEB'
  }

  return (
    <section style={style}>
      <div className='about-container'>
        <div className='about-text'>
          <h3>Why choose Colorado Luxe Cotton Candy?</h3>
          <p>At Colorado Luxe Cotton Candy, we pride ourselves on delivering 100% fresh, gourmet-quality cotton candy for both private and commercial clients. Our cotton candy is crafted from the finest sugars and ingredients, ensuring a soft texture and outstanding flavor that is truly unique. Try our sampler!
          <br />
          <br />
          Each batch is hand-spun and promptly packaged, with double heat sealed packaging to lock in freshness. Our custom designed shipping boxes protect your cotton candy from humidity and damage, ensuring it arrives in perfect condition.
          <br />
          <br />
          Our freshness guarantee is built on well-defined processes, ensuring that every customer, whether private or commercial, receives the consistently delicious, ultra-fresh gourmet cotton candy they expect.
          We do more than cater - we elevate your event with our charming cart and friendly service.</p>
        </div>
        <div className='about-img'>
          <img src={freeFrom} alt='free from soy, gluten, dairy, GMOs and peanuts' />
        </div>
      </div>
    </section>
  )
};

export default About;