import React from 'react';
import Card from './Card';
import wedding from '../images/wedding.webp';
import party from '../images/party.webp';
import brands from '../images/brands.webp'
import fundraiser from '../images/fundraiser.webp'

function Events() {

  const style = {
    backgroundColor: '#C17B88'
  }

  return (
    <div>
      <section className='event-container' style={style}>
        <h3 className='event-title'>SERVICES</h3>
        <hr />
        <section className='events'>
          <Card img={wedding} text='WEDDINGS'/>
          <Card img={party} text='PARTIES' />
          <Card img={brands} text='BRANDED EVENTS' />
          <Card img={fundraiser} text='FUNDRAISERS' />
        </section>
      </section>
    </div>
  )
};

export default Events;