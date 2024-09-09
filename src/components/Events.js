import React from 'react';
import Card from './Card'
import birthday from '../images/birthday.jpeg';
import brand from '../images/brand.jpeg';
import wedding from '../images/wedding.jpeg';
import bulk from '../images/bulk.jpeg'

function Events() {
  return (
    <section id='services'>
      <div>
        <div className='event-line'></div>
        <div className='event-line-two'></div>
        <div className='event-container-text'>
          <h2 className='event-heading'>Add a touch of <span>whimsy</span> to any occasion</h2>
        </div>
        <div className='card-container'>
          <Card image={birthday} text='Birthdays' />
          <Card image={wedding} text='Weddings'/>
          <Card image={brand} text='Brand Activations'/>
          <Card image={bulk} text='Bulk pricing' />
        </div>
        <p className='event-subheading'>Our cart and menu offerings are ideal for any event or celebration, from brand activations and retail events to employee appreciation, birthday parties, and weddings. Whatever you need, we can make it happen.</p>
        <p className='event-subheading'>We also offer pre-packaged flavors, perfect for events of any size from conferences and tradeshows, to promotions and swag bags!</p>
      </div>
      <div className='event-btn-container'>
        <a href='#form'><button className='event-btn'>ASK ABOUT YOUR EVENT</button></a>
      </div>
    </section>
  )
};

export default Events;