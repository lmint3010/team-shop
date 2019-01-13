import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './ListProducts.css';

class ListProducts extends Component {
    render() {
        return (
            <Container className="list-products-container">
                <Row>
                    <Col xs="6" sm="6" md="4" lg="4">
                        <div className="product mb-10">
                                <Row className="p-4" >
                                    <Col xs="6" sm="6" md="6" lg="6" className="d-flex">
                                        <div >
                                            <h2>
                                                Product
                                            </h2>
                                            <p>
                                                Get 20% cash back
                                            </p>
                                            <Button color="success" size="md" className="mb-10">Buy Now</Button>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="6" md="6" lg="6">
                                        <div className="block-image" >
                                            <img src="http://blogs-images.forbes.com/gordonkelly/files/2016/11/Screenshot-2016-11-05-at-15.13.00.png"
                                            alt="iphone" />
                                        </div>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="4" lg="4">
                        <div className="product mb-10">
                                <Row className="p-4" >
                                    <Col xs="6" sm="6" md="6" lg="6" className="d-flex">
                                        <div>
                                            <h2>
                                                Product
                                            </h2>
                                            <p>
                                                Get 20% cash back
                                            </p>
                                            <Button color="success" size="md" className="mb-10">Buy Now</Button>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="6" md="6" lg="6">
                                        <div className="block-image" >
                                            <img src="http://blogs-images.forbes.com/gordonkelly/files/2016/11/Screenshot-2016-11-05-at-15.13.00.png"
                                            alt="iphone" />
                                        </div>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="4" lg="4">
                        <div className="product mb-10">
                                <Row className="p-4" >
                                    <Col xs="6" sm="6" md="6" lg="6" className="d-flex">
                                        <div>
                                            <h2>
                                                Product
                                            </h2>
                                            <p>
                                                Get 20% cash back
                                            </p>
                                            <Button color="success" size="md" className="mb-10">Buy Now</Button>
                                        </div>
                                    </Col>
                                    <Col xs="6" sm="6" md="6" lg="6">
                                        <div className="block-image" >
                                            <img src="http://blogs-images.forbes.com/gordonkelly/files/2016/11/Screenshot-2016-11-05-at-15.13.00.png"
                                            alt="iphone" />
                                        </div>
                                    </Col>
                                </Row>
                        </div>
                    </Col>
                             
                </Row>
           </Container>
        );
    }
}

export default ListProducts;
