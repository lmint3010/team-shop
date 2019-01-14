import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import TopProductItem from '../TopProductItem/TopProductItem';
import './TopProducts.css';

class TopProducts extends Component {
    render() {
        return (
            <Container>
                <Row>      
                    <TopProductItem />  
                    <TopProductItem />  
                    <TopProductItem />  
                    <TopProductItem />  
                    <TopProductItem />  
                    <TopProductItem />  
                    <TopProductItem />  
                </Row>
           </Container>
        );
    }
}

export default TopProducts;
