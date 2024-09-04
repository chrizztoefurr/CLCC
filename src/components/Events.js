import React from 'react';
import Card from './Card'
import birthday from '../images/birthday.jpeg';
import brand from '../images/brand.jpeg';
import wedding from '../images/wedding.jpeg';
import party from '../images/private.jpeg'

function Events() {
  return (
    <section>
      <div>
        <div className='event-line'></div>
        <div className='event-line-two'></div>
        <div className='event-container-text'>
          <h2 className='event-heading'>Add a touch of <span>whimsy</span> to any occasion</h2>
        </div>
        <div className='card-container'>
          <Card image={party} text='Private Parties' />
          <Card image={birthday} text='Birthdays' />
          <Card image={brand} text='Branded Events'/>
          <Card image={wedding} text='Weddings'/>
        </div>
        <p className='event-subheading'>From live cotton candy spinning to pre-spun, packaged treats; we’re dedicated to making your event a sweet success.</p>
      </div>
      <div className='event-btn-container'>
        <button className='event-btn'>ASK ABOUT YOUR EVENT</button>
      </div>
    </section>
  )
};

export default Events;