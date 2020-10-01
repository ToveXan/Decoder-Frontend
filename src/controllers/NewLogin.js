import React from 'react'
import '../css/NewLogin.css';

function NewLogin() {
  return (
    <div id="holder">
      <div className="blur">
          <div className="form-div">
            <div className="login-field">
              <h1>Login</h1>
              <img src="http://www.pngall.com/?p=43607" alt="" />
              <br/>
              <div className="user-div">
              <label>Username</label>
              <p />
              <input
                className="txt-login"
                name="username"
                placeholder="username"
              />
              </div>
              <div className="password-div">
              <label>Password</label>
              <br />
              <input
              className="txt-login"
                type="password"
                placeholder="password"
                />
              </div>
               <a id="fake-login" href="/main">
                   Login
                  </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewLogin
