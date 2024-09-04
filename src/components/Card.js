import React from 'react';

function Card(props) {
  return (
    <div className='card-grid-item'>
      <img src={props.image} alt={props.text} className='card-img'/>
      <p className='card-text'>{props.text}</p>
    </div>
  )
};

export default Card;