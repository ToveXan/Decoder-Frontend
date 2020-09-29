import React from 'react';
import { NavLink } from 'react-router-dom';


class MainMenu extends React.Component {
  constructor(){
    super()
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/users')
    .then(resp => resp.json())
    .then(users  => 
      this.setState({
        users: users
      }))
  }

  grabUser() {
  return this.state.users.map(i => i.username)
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="main-menu">
          <div>
            <p>this is {this.grabUser()}'s menu</p>
            <p />
            <NavLink to="/">
            Title Menu
            </NavLink>
            <p />
            <NavLink to="/tutorial">
            Tutorial
            </NavLink>
            <p />
            <NavLink to="/case-one">
            Case One
            </NavLink>
            <p />
            <NavLink to="/case-two">
            Case Two
            </NavLink>
            <p />
            <NavLink to="/case-three">
            Case Three
            </NavLink>

          </div>
      </div>
    );
  }
}

export default MainMenu;
