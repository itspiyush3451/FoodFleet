import React from 'react';
import '../index.css';

const Login = () => (
  <div className="LoginContainer">
    <div className="admin">
      <div className="content">
        <strong style={{ fontSize: 16, marginBottom: 0 }}>BUSINESS</strong>
        <h2>For <span style={{ color: 'green' }}>Admins</span></h2>
        <form>
          <b>Email :</b>
          <input type="email" name="email" placeholder="Enter email..." className="email" /> <br />
          <b>Password:</b>
          <input type="password" name="password" placeholder="Enter password" className="password" />
          <br />
          <button type="submit" className="loginButton">Log in</button>
        </form>
      </div>
    </div>
    <div className="user">
      <div className="content">
        <h2>For <span style={{ color: 'green' }}>Users</span></h2>
        <form className="form">
          <b>Email :</b>
          <input type="email" name="userEmail" placeholder="Enter email" /><br />
          <b>Password:</b>
          <input type="password" name="userPassword" placeholder="Enter password" required maxLength={8} minLength={4} className="userPassword" /><br />
          <button type="submit" className="loginButton">Log in</button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
