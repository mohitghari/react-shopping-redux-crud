import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Cart from './components/cart/cart'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="wrapper">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/cart' component={Cart}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;