import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import SortBy from './SortBy/SortBy';
import ShowResults from './ShowResults/ShowResults';
import './Categories.scss';

const Categories = () => (
  <Container>
    <Row>
      <Col lg="3">
        <ShowResults />
      </Col>
      <Col lg="9">
        <SortBy />
      </Col>
    </Row>
  </Container>
)

export default Categories