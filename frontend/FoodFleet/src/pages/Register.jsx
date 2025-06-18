import React from 'react';
import '../index.css';

const Register = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <h2 className="text-success fw-bold mb-4 text-center">Register</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" name="password" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
