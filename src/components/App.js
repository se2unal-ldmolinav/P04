import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GET CON AXIOS</h1>
          <Link to='/movieList'>Movie List</Link>
          &emsp;
          <Link to='/authorCreation'>Author Creation</Link>
        </header>
      </div>
    );
  }
}

export default App;
