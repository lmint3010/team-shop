import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/Menu'
import './App.css';

import TopBrands from './components/TopBrands/TopBrands';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <TopBrands/>
      </div>
    );
  }
}

export default App;
