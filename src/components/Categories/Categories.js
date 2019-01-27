import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import SortBy from './SortBy/SortBy';
import './Categories.scss';

const Categories = () => (
  <Container>
    <Row>
      <Col lg="3">Left</Col>
      <Col lg="9">
        <SortBy />
      </Col>
    </Row>
  </Container>
)

export default Categories