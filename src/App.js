import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', description: 'High-quality wireless headphones with noise cancellation' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', description: 'Feature-rich smartwatch with health tracking' },
    { id: 3, name: 'Laptop Backpack', price: 49.99, image: '🎒', description: 'Durable backpack with laptop compartment' },
    { id: 4, name: 'Wireless Mouse', price: 29.99, image: '🖱️', description: 'Ergonomic wireless mouse with precision tracking' },
    { id: 5, name: 'USB-C Hub', price: 39.99, image: '🔌', description: 'Multi-port USB-C hub for all your devices' },
    { id: 6, name: 'Phone Case', price: 19.99, image: '📱', description: 'Protective case with sleek design' },
    { id: 7, name: 'Portable Charger', price: 34.99, image: '🔋', description: 'High-capacity portable charger for mobile devices' },
    { id: 8, name: 'Bluetooth Speaker', price: 59.99, image: '🔊', description: 'Portable Bluetooth speaker with rich sound' },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="App">
      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={() => setShowCart(!showCart)} 
      />
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart} />
        {showCart && (
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            totalPrice={getTotalPrice()}
            onClose={() => setShowCart(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
