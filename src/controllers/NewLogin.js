import React from 'react'
import '../css/NewLogin.css';

function NewLogin() {
  return (
    <div>
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
                type="password"
                placeholder="password"
                />
               <a id="fake-login" href="/main">
                   Login
                  </a>
            </div>
        </div>
    </div>
  )
}

export default NewLogin
