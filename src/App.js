import React, { Component } from 'react';

// Team Components
import Menu from './components/Menu/Menu'
import ListProducts from './components/ListProducts/ListProducts';
import TopProducts from './components/TopProducts/TopProducts';

// Team CSS
import Carousel from './components/Carousel/Carousel';
import './App.css';

import TopBrands from './components/TopBrands/TopBrands';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Carousel/>
        <ListProducts />
        <TopProducts />
        <TopBrands/>
      </div>
    );
  }
}

export default App;
