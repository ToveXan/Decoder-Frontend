import React from 'react';


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
      <div className="MainMenu">
          <div>
            <p>this is {this.grabUser()}'s menu</p>
          </div>
      </div>
    );
  }
}

export default MainMenu;
