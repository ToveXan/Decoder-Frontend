import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Title.css';
//import '../fonts.css';

class Title extends React.Component{
  render(){
  return (
      <div className="title-full">
        {/* <div>
          <h1 className="title">Hello</h1>
        </div> */}
        <div className="all-links">
          <NavLink 
            to="/login"
            className="side-nav">
            LOGIN
          </NavLink>
          <p />
          <NavLink 
            to="/signup"
            className="side-nav">
            SIGNUP
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Title;
