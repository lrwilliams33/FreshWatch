import React from 'react';
import './ItemCard.css'

const ItemCard = ({ title, expDate }) => {
  return (
    <div className='item-card-container'>
      <h3 className='item-title'>{ title }</h3>
      <h5 className='exp-date-txt'>Expiration Date: </h5>
      <p className='exp-date'>{ expDate }</p>
    </div>
  );
}

export default ItemCard;