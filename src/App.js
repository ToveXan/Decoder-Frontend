import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './fonts.css';
import MainMenu from './controllers/MainMenu';
import Login from './controllers/Login';
import Signup from './controllers/Signup';
import Title from './controllers/Title';
import CaseFileOne from './controllers/CaseFileOne';
import CaseFileTwo from './controllers/CaseFileTwo';
import CaseFileThree from './controllers/CaseFileThree';
import Tutorial from './controllers/Tutorial';
import Navbar from './controllers/Navbar';
import About from './controllers/About';
import GrahamDialogue from './controllers/modal/GrahamDialogue';


class App extends React.Component{
  render(){
  return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Title} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          <div className="file-div">
          <Navbar />
            <Route exact path="/main" component={MainMenu} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/case-one" component={CaseFileOne}/>
            <Route exact path="/case-two" component={CaseFileTwo} />
            <Route exact path="/case-three" component={CaseFileThree} />
            <Route exact path="/about" component={About} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
