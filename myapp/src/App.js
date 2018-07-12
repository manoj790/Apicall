import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import login from './login.js';
import signUp from './signUp.js';
import beveragelist from './Component/beveragelist.js';
const Home = () => (
  <div>
     <ul></ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signUp">SignUp</Link></li>
          <Link to="/beveragelist"></Link>

        </ul>
         <Route path="/" component={Home}/>
         <Route path="/login" component={login}/>
         <Route path="/signUp" component={signUp}/>
         <Route path="/beveragelist" component={beveragelist}/>

        
      </div>
    );
  }
}

export default App;
