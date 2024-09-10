import React from 'react';

const CardPizza = ({ pizza }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <h6>Ingredientes:</h6>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="card-text"><strong>Precio: ${pizza.price.toLocaleString()}</strong></p>
      </div>
    </div>
  );
};

export default CardPizza;
