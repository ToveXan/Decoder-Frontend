import React from 'react';
import '../css/Login.css';


function Login(){ 
  return (
      <div className="Login">
          <div className="form-div">
            <div className="login-field">
              <br/>
              <input
                className="txt-input"
                name="username"
                placeholder="username"
              />
              <br/>
              <br/>
              <input
              className="txt-input"
                name="password"
                placeholder="password"
                />
               <a id="fake-login" href="/main">
                   Login
                  </a>
            </div>
        </div>
      </div>
    );
}

export default Login;
