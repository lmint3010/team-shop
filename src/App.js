import React, { Component } from 'react';

// Team Components
import Menu from './components/Menu'
import ListProducts from './components/ListProducts/ListProducts';
import TopProducts from './components/TopProducts/TopProducts';

// Team CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <ListProducts />
        <TopProducts />
        </div>
    );
  }
}

export default App;
