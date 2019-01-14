import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import './TopProductItem.css';

class TopProductItem extends Component {
    render() {
        return (
            <Col xs="6" sm="6" md="4" lg="3">
                <div className="item">
                    <div className="sale">
                            20% off
                    </div>
                    <div className="image">
                        <img src="https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg"
                        alt="product" />
                    </div>
                    <div className="top-product">
                        <p className="subtitle">Jeans</p>
                        <h3 className="title">Vintage Jean</h3>
                        <p className="price">$18.75</p>
                        <Button color="primary" className="btn-add" >Add To Cart</Button>
                    </div>
                </div>
            </Col>
        );
    }
}

export default TopProductItem;
