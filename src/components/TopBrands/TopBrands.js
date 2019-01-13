import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";

import "./TopBrands.css";

class TopBrands extends Component {
  render() {
    return (
      <Container className="topbrands">
          <Row>
            <Col md="3">
              <a href="">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Image/ImageBrands/client-logo-1.png"
                  }
                />
              </a>
            </Col>
            <Col md="3">
              <a href="">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Image/ImageBrands/client-logo-2.png"
                  }
                />
              </a>
            </Col>
            <Col md="3">
              <a href="">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Image/ImageBrands/client-logo-3.png"
                  }
                />
              </a>
            </Col>
            <Col md="3">
              <a href="">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/Image/ImageBrands/client-logo-4.png"
                  }
                />
              </a>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default TopBrands;
