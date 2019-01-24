import React from 'react';
import { Container, Row } from 'reactstrap';
import './TopProducts.css';

import Product from './Product/Product';

const TopProducts = () => {
    return (
        <Container className="super-lightblue" >
            <Row>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Row>
        </Container>
    );
}

export default TopProducts;