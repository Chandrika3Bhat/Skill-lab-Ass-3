import React from 'react';

const ProductCard = ({ name, image, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      <div className="quantity">
        <button className="decrement">-</button>
        <input type="text" value="1" readOnly />
        <button className="increment">+</button>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
