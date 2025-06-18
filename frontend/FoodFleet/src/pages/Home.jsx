import React from 'react';
import '../index.css';

const Home = () => (
  <>
    {/* Hero Section */}
    <section className="bg-light py-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7 text-white" style={{background: 'rgba(0,0,0,0.5)', borderRadius: '20px', padding: '40px'}}>
            <h1 className="display-2 fw-bold mb-3">Welcome to <span className="text-warning">FoodFleet</span></h1>
            <p className="lead mb-4">Fresh, delicious meals delivered to your door. Discover our chef-crafted menu and taste the difference today!</p>
            <a href="/register" className="btn btn-warning btn-lg shadow">Get Started</a>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="container py-5">
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <i className="bi bi-basket2-fill display-4 text-success mb-3"></i>
            <h4 className="fw-bold">Fresh Ingredients</h4>
            <p>We use only the freshest, locally sourced ingredients for every meal.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <i className="bi bi-truck display-4 text-warning mb-3"></i>
            <h4 className="fw-bold">Fast Delivery</h4>
            <p>Your food arrives hot and on time, every time, right to your doorstep.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white">
            <i className="bi bi-star-fill display-4 text-danger mb-3"></i>
            <h4 className="fw-bold">Chef Crafted</h4>
            <p>Enjoy meals created by top chefs for a gourmet experience at home.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Sample Menu Section */}
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Featured Dishes</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Pizza" />
              <div className="card-body text-center">
                <h5 className="card-title">Gourmet Pizza</h5>
                <p className="card-text">Wood-fired, topped with fresh mozzarella and basil.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Salad" />
              <div className="card-body text-center">
                <h5 className="card-title">Farm Fresh Salad</h5>
                <p className="card-text">A colorful mix of greens, veggies, and house vinaigrette.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" className="card-img-top" alt="Burger" />
              <div className="card-body text-center">
                <h5 className="card-title">Classic Burger</h5>
                <p className="card-text">Juicy beef patty, cheddar, lettuce, tomato, and our secret sauce.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
