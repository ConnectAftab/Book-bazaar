import React from 'react';
import '../styles/card.css';

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards">
      <div className="image-box">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - ${price}</p>
        <div className="button-container">
          <button className="add-button" onClick={() => handleClick(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
