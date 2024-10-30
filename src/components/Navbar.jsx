import React from 'react';
import '../styles/navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop" onClick={() => setShow(true)}>
          BookBazaar
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus" />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
