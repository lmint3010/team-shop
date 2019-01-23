import React from 'react';
import { Container } from 'reactstrap';

// Team Components
import Menu from '../Menu/Menu'
import ListProducts from '../ListProducts/ListProducts';
import TopProducts from '../TopProducts/TopProducts';
import Carousel from '../Carousel/Carousel';
import TopBrands from '../TopBrands/TopBrands';
import TopMenu from '../TopMenu/TopMenu';

// Team CSS
import './App.css';
const App = () => {
    return (
        <div className="App">
            <div className="menu-fixed">
                <Container>
                    <div className="top-flex">
                        <div className="top-logo">
                            <a href="\#" title="logo">
                                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo-phones-shope" />
                            </a> 
                        </div>
                        <div className="top-nav"> 
                            <TopMenu /> 
                        </div>    
                    </div>
                </Container>
            </div>
            <div className="main-menu text-left">
                <Container>
                    <TopMenu />
                </Container>
            </div>
            <Carousel/>
            <ListProducts />
            <TopProducts />
            <TopBrands/>
        </div>
    );
}

export default App;
