import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Footer.scss";

const imgCards = "/Images/ImageBrands/cards.png";

class Footer extends Component {
  render() {
    return (
      <Router>
        <div className="Footer">
          <Container>
            <Row>
              <Col xs="12" md="12" lg="4" className="ps-footer-col-1">
                <p>About Company</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  quo nesciunt pariatur laboriosam accusantium? Doloremque fugit
                  unde explicabo consequuntur aliquid laudantium id voluptatum?
                  Saepe earum, suscipit ex quos eius natus.
                </p>
              </Col>
              <Col xs="12" md="3" lg="2" className="ps-footer-col-2">
                <p>About</p>

                <Link to="/about">About</Link>
                <Link to="/term&condition">Term and Condition</Link>
                <Link to="/policy">Privacy Policy</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
              </Col>
              <Col xs="12" md="3" lg="2" className="ps-footer-col-3">
                <p>Session</p>
                <Link to="/signin">Sign In</Link>
                <Link to="/resgister">Register</Link>
                <Link to="/forgot">Forgot Password</Link>
                <Link to="/">Thank You</Link>
              </Col>
              <Col xs="12" md="3" lg="2" className="ps-footer-col-4">
                <p>Categories</p>
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
                <Link to="/accessories">Accessories</Link>
                <Link to="/gadgets">Gadgets</Link>
              </Col>
              <Col xs="12" md="3" lg="2" className="ps-footer-col-5">
                <p>Social</p>
                <Link to="fb.com/monkyulyx">Facebook</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Google Plus</Link>
              </Col>
            </Row>
            <div className="ps-line" />
            <div className="ps-copy-right">
              <img src={process.env.PUBLIC_URL + imgCards} alt="nothing" />
              <p>
                © All Rights Reversed | Made With Love by IRON NETWORK for
                better Web
              </p>
            </div>
          </Container>
        </div>
      </Router>
    );
  }
}

export default Footer;
