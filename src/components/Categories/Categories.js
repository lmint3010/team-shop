import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import SearchProducts from './SearchProducts/SearchProducts';
import ShowResults from './ShowResults/ShowResults';

import SortBy from './SortBy/SortBy';
import './Categories.scss';

const Categories = () => (
    <Container>
        <Row>
            <Col lg="3">
                <SearchProducts />
                <ShowResults/>
            </Col>
            <Col lg="9">Right</Col>
        </Row>
    </Container>
)

export default Categories