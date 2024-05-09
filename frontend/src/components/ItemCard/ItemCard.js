import React from 'react';
import './ItemCard.css'

const ItemCard = ({ item }) => {
  return (
    <div className="item-details">
      <h4>{ item.title }</h4>
      <p><strong>Expiration Date: </strong>{ item.expirationDate }</p>
    </div>
  )
}
// const ItemCard = ({ title, expDate }) => {
//   return (
//     <div className='item-card-container'>
//       <h3 className='item-title'>{ title }</h3>
//       <h5 className='exp-date-txt'>Expiration Date: </h5>
//       <p className='exp-date'>{ expDate }</p>
//     </div>
//   );
// }

export default ItemCard;