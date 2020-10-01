import React from 'react';
import '../css/Signup.css';


function Signup() {
  return (
    <div id="holder">
    <div className="blur">
        <div className="form-div">
          <div className="login-field">
            <h1>Signup</h1>
            <img src="http://www.pngall.com/?p=43607" alt="" />
            <br/>
            <div className="user-div">
            <label>Set Username</label>
            <p />
            <input
              className="txt-signup"
              name="username"
              placeholder="username"
            />
            </div>
            <div className="password-div">
            <label>Set Password</label>
            <p />
            <input
            className="txt-signup"
              type="password"
              placeholder="password"
              />
            </div>
             <a id="fake-login" href="/">
                 Signup
                </a>
          </div>
      </div>
      </div>
  </div>
  )
}

export default Signup
