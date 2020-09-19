import React from 'react';
import './App.css';
import './fonts.css';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './controllers/MainMenu';
import Login from './controllers/Login';

class App extends React.Component{
  render(){
  return (
      <div className="App">
        <header className="App-header">
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/main" component={MainMenu} />
            </Switch>
            
          </div>
        </header>
      </div>
    );
  }
}

export default App;
