import React from 'react';
import '../index.css';

const Navigation = () => (
  <nav className="navbar">
    <img src="/Images/logo.png" alt="Logo" className="logo" />
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/location">Locate Us</a></li>
      <li><a href="/about">About Us</a></li>
      <li><a href="/login">Log In</a></li>
    </ul>
  </nav>
);

export default Navigation;
