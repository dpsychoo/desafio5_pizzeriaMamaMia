import React, { useState } from 'react';
import pizzas from '../components/pizzas';

const initialCart = pizzas.map(pizza => ({ ...pizza, quantity: 0 }));

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleIncrease = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2>Tu Carrito</h2>
      <div className="row">
        {cart.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-3">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <p><strong>Precio: ${item.price.toLocaleString()}</strong></p>
                <p><strong>Cantidad: {item.quantity}</strong></p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => handleDecrease(item.id)}>
                    -
                  </button>
                  <button className="btn btn-success" onClick={() => handleIncrease(item.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${calculateTotal().toLocaleString()}</h3>
      <button className="btn btn-primary">Pagar</button>
    </div>
  );
};

export default Cart;
