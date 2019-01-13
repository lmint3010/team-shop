import React, { Component } from 'react';
import ListProducts from './components/ListProducts/ListProducts';
import TopProducts from './components/TopProducts/TopProducts';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <ListProducts />
            <TopProducts />
        </div>
    );
  }
}

export default App;
