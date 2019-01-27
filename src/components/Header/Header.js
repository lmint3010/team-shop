import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import './Header.scss'
const imgUrl = '/images/ImageBrands/logo.png'
const imgUser = '/images/ImageBrands/log-in-user.jpg'
const imgCart1 = '/images/ImageBrands/g-2-a.jpg'
const imgCart2 = '/images/ImageBrands/g-5-a.jpg'
const imgCart3 = '/images/ImageBrands/a-5-a.jpg'

class Header extends Component {
    render() {
        return <section className="ps-Header">
            <div className="ps-container">
                <div className="ps-col-1">
                    <img src={process.env.PUBLIC_URL + imgUrl} alt="nothing" />
                </div>
                <div className="ps-col-2">
                    <input type="search" className="ps-search-box" placeholder="Enter a keyword to search" />
                    <span><i className="fa fa-search" aria-hidden="true"></i></span>
                </div>
                <div className="ps-col-3">
                    <div className="ps-header-icont-cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="ps-header-count">3</span>
                        <div className="ps-header-show-cart">
                            <div>
                                <div className="ps-row">
                                    <Row>
                                        <Col xs="3" md="3" lg="3">
                                            <img src={process.env.PUBLIC_URL + imgCart1} alt="nothing" />
                                        </Col>
                                        <Col xs="9" md="9" lg="9" className="ps-row-item">
                                            <p>Black Smartphone</p>
                                            <span>$1352.23</span>
                                            <div className="ps-row-item-manage">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </Col> 
                                    </Row>
                                    <Row>
                                        <Col xs="3" md="3" lg="3">
                                            <img src={process.env.PUBLIC_URL + imgCart2} alt="nothing" />
                                        </Col>
                                        <Col xs="9" md="9" lg="9" className="ps-row-item">
                                            <p>Smart Speaker</p>
                                            <span>$446.60</span>
                                            <div className="ps-row-item-manage">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </Col> 
                                    </Row>
                                    <Row>
                                        <Col xs="3" md="3" lg="3">
                                            <img src={process.env.PUBLIC_URL + imgCart3} alt="nothing" />
                                        </Col>
                                        <Col xs="9" md="9" lg="9" className="ps-row-item">
                                            <p>Smart Glasses</p>
                                            <span>$321.15</span>
                                            <div className="ps-row-item-manage">
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                        </Col> 
                                    </Row>
                                </div>
                            </div>
                            <div className="ps-checkout">
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                    <div className="ps-header-icont-heart">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <span className="ps-header-count">1</span>
                        <div className="ps-header-show-heart">
                            <div className="ps-row">
                                <Row>
                                    <Col xs="3" md="3" lg="3">
                                        <img src={process.env.PUBLIC_URL + imgCart1} alt="nothing" />
                                    </Col>
                                    <Col xs="9" md="9" lg="9" className="ps-row-item">
                                        <p>Black Smartphone</p>
                                        <span>$1352.23</span>
                                        <div className="ps-row-item-manage">
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                        </div>
                                    </Col> 
                                </Row>
                             </div>
                        </div>
                    </div>
                    <div className="ps-header-icont-profile">
                        <img src={process.env.PUBLIC_URL + imgUser} alt="nothing" />
                        <div className="ps-header-show-profile">
                            <div className="ps-row">
                                <Row>
                                    <Col xs="12" md="12" lg="12">
                                        <span><i className="fa fa-user" aria-hidden="true"></i> Profile</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" md="12" lg="12">
                                        <span><i className="fa fa-cog" aria-hidden="true"></i> Account</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" md="12" lg="12">
                                        <span><i className="fa fa-envelope" aria-hidden="true"></i> Messages</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12" md="12" lg="12">
                                        <span><i className="fa fa-sign-out" aria-hidden="true"></i> Log out</span>
                                    </Col>
                                </Row>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Header