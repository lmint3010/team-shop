import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import SearchProducts from './SearchProducts/SearchProducts';

const Categories = () => (
    <Container>
        <Row>
            <Col lg="3">
                <SearchProducts />
            </Col>
            <Col lg="9">Right</Col>
        </Row>
    </Container>
)

export default Categories