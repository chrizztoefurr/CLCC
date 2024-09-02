import React from 'react';

function Card(props) {
  return (
    <div className='event-card'>
      <img src={props.img} alt={props.text}/>
      <p className='card-text'>{props.text}</p>
    </div>
  )
};

export default Card;