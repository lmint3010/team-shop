import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Product from '../Product/Product';
import './ListProducts.css';

class ListProducts extends Component {
    render() {
        return (
            <Container>
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
}

export default ListProducts;
