import React from 'react';
import '../index.css';

const Login = () => (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-5">
        <div className="card shadow-lg border-0 mb-4">
          <div className="card-body">
            <h2 className="text-success fw-bold mb-3 text-center">Admin Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="adminEmail" className="form-label">Email</label>
                <input type="email" id="adminEmail" name="email" className="form-control" placeholder="Enter email..." />
              </div>
              <div className="mb-3">
                <label htmlFor="adminPassword" className="form-label">Password</label>
                <input type="password" id="adminPassword" name="password" className="form-control" placeholder="Enter password" />
              </div>
              <button type="submit" className="btn btn-success w-100">Log in</button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="card shadow-lg border-0">
          <div className="card-body">
            <h2 className="text-success fw-bold mb-3 text-center">User Login</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="userEmail" className="form-label">Email</label>
                <input type="email" id="userEmail" name="userEmail" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">Password</label>
                <input type="password" id="userPassword" name="userPassword" className="form-control" placeholder="Enter password" maxLength={8} minLength={4} required />
              </div>
              <button type="submit" className="btn btn-success w-100">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
