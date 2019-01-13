import React, { Component } from 'react';
import ListProduct from './components/ListProduct/ListProduct';
import TopProducts from './components/TopProducts/TopProducts';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <ListProduct />
            <TopProducts />
        </div>
    );
  }
}

export default App;
