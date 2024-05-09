import React from 'react';
import './ItemCard.css'

const ItemCard = () => {
  return (
    <div className='item-card-container'>
      <h3 className='item-title'>Strawberries</h3>
      <h5 className='exp-date-txt'>Expiration Date: </h5>
      <p className='exp-date'>1/23/2024</p>
    </div>
  );
}

export default ItemCard;