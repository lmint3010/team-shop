import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu/Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
      </div>
    );
  }
}

export default App;
