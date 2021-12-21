import React, { useState } from "react";

function PlantCard({ name, price, image, id }) {
  const [soldOut, setSoldOut] = useState(false);

  const soldOutHandler = () => {
    setSoldOut(!soldOut);
  };

  return (
    <li className="card" key={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={soldOutHandler}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={soldOutHandler}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
