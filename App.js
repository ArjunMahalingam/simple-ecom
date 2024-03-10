import React, { useState } from 'react';
import './App.css';
import shirt1 from "./images/vijay.jpg";
import shirt2 from "./images/ajith.jpeg";
import shirt3 from "./images/alluarjun.jpeg";

const products = [
  { id: 1, name: 'VIJAY', price: 20, image: shirt1 },
  { id: 2, name: 'AJITH', price: 30, image: shirt2 },
  { id: 3, name: 'ALLUARJUN', price: 40, image: shirt3 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  const checkout = () => {
    alert('Thank you for your purchase!');
    setCart([]);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>My E-Commerce Store</h1>
      </header>
      <section className='App-products'>
        {products.map(product => (
          <div key={product.id} className='App-product'>
            <img src={product.image} alt={product.name} style={{ width: '10%', height: '3%', justifyContent: 'center', alignContent: 'center' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </section>
      <section className='"App-cart'>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <button onClick={checkout}>Checkout</button>
      </section>
    </div>
  )
};

export default App;