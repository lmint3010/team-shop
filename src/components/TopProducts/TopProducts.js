import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './TopProducts.css';

class TopProducts extends Component {
    render() {
        return (
            <Container>
                <Row>        
                    <Col xs="4" md="4" sm="3" lg="3">
                        <div className="wrapper">
                            <div className="sale">
                                    20% off
                                </div>
                            <div className="item">
                                <div className="image">
                                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                                    alt="product" />
                                </div>
                                <div className="__product">
                                    <p className="subtitle">Jeans</p>
                                    <h3 className="title">Vintage Jean</h3>
                                    <p className="price">$18.75</p>
                                    <Button color="primary" size="md" >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" md="4" sm="3" lg="3">
                        <div className="wrapper">
                            <div className="sale">
                                    20% off
                                </div>
                            <div className="item">
                                <div className="image">
                                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                                    alt="product" />
                                </div>
                                <div className="__product">
                                    <p className="subtitle">Jeans</p>
                                    <h3 className="title">Vintage Jean</h3>
                                    <p className="price">$18.75</p>
                                    <Button color="primary" size="md" >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" md="4" sm="3" lg="3">
                        <div className="wrapper">
                            <div className="sale">
                                    20% off
                                </div>
                            <div className="item">
                                <div className="image">
                                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                                    alt="product" />
                                </div>
                                <div className="__product">
                                    <p className="subtitle">Jeans</p>
                                    <h3 className="title">Vintage Jean</h3>
                                    <p className="price">$18.75</p>
                                    <Button color="primary" size="md" >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" md="4" sm="3" lg="3">
                        <div className="wrapper">
                            <div className="sale">
                                    20% off
                                </div>
                            <div className="item">
                                <div className="image">
                                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                                    alt="product" />
                                </div>
                                <div className="__product">
                                    <p className="subtitle">Jeans</p>
                                    <h3 className="title">Vintage Jean</h3>
                                    <p className="price">$18.75</p>
                                    <Button color="primary" size="md" >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs="4" md="4" sm="3" lg="3">
                        <div className="wrapper">
                            <div className="sale">
                                    20% off
                                </div>
                            <div className="item">
                                <div className="image">
                                    <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                                    alt="product" />
                                </div>
                                <div className="product">
                                    <p className="subtitle">Jeans</p>
                                    <h3 className="title">Vintage Jean</h3>
                                    <p className="price">$18.75</p>
                                    <Button color="primary" size="md" >Add To Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        );
    }
}

export default TopProducts;
