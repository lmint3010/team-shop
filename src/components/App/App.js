import React from 'react';

// Team Components
import Menu from '../Menu/Menu'
import ListProducts from '../ListProducts/ListProducts';
import TopProducts from '../TopProducts/TopProducts';
import Carousel from '../Carousel/Carousel';
import TopBrands from '../TopBrands/TopBrands';
import TopMenu from '../TopMenu/TopMenu';

// Team CSS
import './App.css';
//12312312321
const App = () => {
    return (
        <div className="App">
            {/* <Menu/> */}
            <TopMenu />
            <Carousel/>
            <ListProducts />
            <TopProducts />
            <TopBrands/>
        </div>
    );
}

export default App;
