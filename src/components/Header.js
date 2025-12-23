import React from 'react';
import './Header.css';

function Header({ cartItemCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">🛍️ E-Commerce Store</h1>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart {cartItemCount > 0 && <span className="cart-count">({cartItemCount})</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
