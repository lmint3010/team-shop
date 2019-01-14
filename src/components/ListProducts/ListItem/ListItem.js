import React from 'react';
import { Row, Col } from 'reactstrap';

const listItem = ({ product }) => (
    <Col xs="6" sm="6" md="4" lg="4">
        <div className="product mb-10">
            <Row className="p-4" >
                <Col xs="6" sm="6" md="6" lg="6" className="d-flex">
                    <div>
                        <h2>{product.brand}</h2>
                        <p> Sale {product.saleOff} available for now</p>
                    </div>
                </Col>
                <Col xs="6" sm="6" md="6" lg="6">
                    <div className="block-image" >
                        <img src={product.thumbnail} alt={product.brand} />
                    </div>
                </Col>
            </Row>
        </div>
    </Col>
)

export default listItem;