import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./TopBrands.css";

const brands = [
  '/Image/ImageBrands/client-logo-1.png',
  '/Image/ImageBrands/client-logo-2.png',
  '/Image/ImageBrands/client-logo-3.png',
  '/Image/ImageBrands/client-logo-4.png'
];

class TopBrands extends Component {
  render() {
    return (
      <Container className="topbrands">
          <Row>
            {brands.map((imgUrl, i) => (
                <Col md="3" key={i}>
                  <div>
                    <img src={process.env.PUBLIC_URL + imgUrl} alt="nothing" />
                  </div>
                </Col>
              )
            )}
          </Row>
      </Container>
    );
  }
}

export default TopBrands;
