import React from 'react';
import '../index.css';

const About = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2 className="fw-bold text-success mb-4">About FoodFleet</h2>
        <p className="lead">At FoodFleet, we are passionate about delivering fresh, high-quality meals straight to your doorstep. Our mission is to bring joy and convenience to your dining experience, whether you're at home, at work, or on the go.</p>
        <p className="mb-4">We partner with top chefs and local producers to ensure every bite is packed with flavor and nutrition. Enjoy a seamless ordering experience and discover why FoodFleet is the preferred choice for food lovers everywhere!</p>
        <img src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" alt="About FoodFleet" className="img-fluid rounded shadow" style={{maxHeight: '300px'}} />
      </div>
    </div>
  </div>
);

export default About;
