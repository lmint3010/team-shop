import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu/Menu'
import Carousel from './components/Carousel/Carousel'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
