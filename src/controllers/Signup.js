import React from 'react';
import '../css/Signup.css';
import { NavLink } from 'react-router-dom';


class Signup extends React.Component{
  render(){
  return (
      <div className="Signup">
          <div>
          <form onSubmit={this.handleSubmit}>
            <div className="Signup-field">
              <label>Username</label>
              <br/>
              <input
                name="username"
                placeholder="username"
              />
              <br/>
              <label>Password</label>
              <br/>
              <input
                name="password"
                placeholder="password"
                />
                <br/>
              <button type="submit">
              Signup
              </button>
            </div>
            <br/>
          </form>
          <NavLink to="/main">
            Main Menu
          </NavLink>
          <p />
          <NavLink to="/">
            Title Menu
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Signup;
