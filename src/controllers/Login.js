import React from 'react';
//import './css/Login.css';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <div>
          <p>this is the login screen</p>
          <NavLink to="/main">
            Main Menu
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Login;
