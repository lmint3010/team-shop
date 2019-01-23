import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./Footer.scss";

const imgCards = '/Image/ImageBrands/cards.png'

class Footer extends Component {
  render() {
    return (
        <div  className="Footer">
            <Container>
                <Row>
                    <Col xs="12" md="12" lg="4" className="ps-footer-col-1">
                        <p>About Company</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo nesciunt pariatur laboriosam accusantium? Doloremque fugit unde explicabo consequuntur aliquid laudantium id voluptatum? Saepe earum, suscipit ex quos eius natus.
                        </p>
                    </Col>
                    <Col xs="12" md="3" lg="2" className="ps-footer-col-2">
                        <p>About</p>
                        <a href="#">About</a>
                        <a href="#">Term and Condition</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">FAQ</a>
                        <a href="#">Contact Us</a>
                    </Col>
                    <Col xs="12" md="3" lg="2" className="ps-footer-col-3">
                        <p>Session</p>
                        <a href="#">Sign In</a>
                        <a href="#">Register</a>
                        <a href="#">Forgot Password</a>
                        <a href="#">Thank You</a>
                    </Col>
                    <Col xs="12" md="3" lg="2" className="ps-footer-col-4">
                        <p>Categories</p>
                        <a href="#">Women</a>
                        <a href="#">Men</a>
                        <a href="#">Accessories</a>
                        <a href="#">Gadgets</a>
                    </Col>
                    <Col xs="12" md="3" lg="2" className="ps-footer-col-5">
                        <p>Social</p>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Youtube</a>
                        <a href="#">Google Plus</a>
                    </Col>
                </Row>
                <div className="ps-line"></div>
                <div className="ps-copy-right">
                    <img src={process.env.PUBLIC_URL + imgCards} alt="nothing" />
                    <p>© All Rights Reversed | Made With Love by IRON NETWORK for better Web</p>
                </div>
            </Container>
        </div>
    );
  }
}

export default Footer;
