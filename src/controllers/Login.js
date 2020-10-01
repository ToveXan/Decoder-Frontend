import React from 'react';
import '../css/Login.css';
import { NavLink } from 'react-router-dom';


class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],
      username: '',
      password: '',
      error: '',
      isLoggedIn: false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(users =>
      this.setState({users: users}))
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.state.username === this.state.users.username && 
      this.state.password === this.state.users.password) {
      return this.setState({ isLoggedIn: true });
    }else if (this.state.password !== this.state.users.password){
      return this.setState({ error: 'Password does not match' });
    
    }else if (this.state.username !== this.state.users.username){
      return this.setState({ error: 'Username does not match' });
    }else
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render(){
  return (
      <div className="Login">
          <div className="form-div">
          <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
      
            <div className="login-field">

              <br/>
              <input
                className="txt-input"
                name="username"
                placeholder="username"
                value={this.state.username} onChange={this.handleUserChange} 
              />
              <br/>
              <br/>
              <input
              className="txt-input"
                name="password"
                placeholder="password"
                value={this.state.password} onChange={this.handlePassChange}
                />
                <br/>
                <input className="btn" type="submit" value="Log In" data-test="submit" />
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

export default Login;
