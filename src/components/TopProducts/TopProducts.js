import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import "./TopProducts.css";

import Product from "./Product/Product";
import { getListProducts } from "../../services/api";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
class TopProducts extends Component {
  state = {
    listProducts: []
  };
  handleGetListProducts = () => {
    getListProducts(
      ({ data }) => {
        this.setState({
          listProducts: data
        });
      },
      err => console.log(err)
    );
  };
  renderListProducts = () => {
    const {
      state: { listProducts }
    } = this;
    return listProducts.map((product, index) => {
      return <Product propsDetail={product} key={index} />;
    });
  };
  componentDidMount = () => {
    this.handleGetListProducts();
  };
  render() {
    const { renderListProducts } = this;
    return (
      <Container className="super-lightblue">
        <CSSTransitionGroup>
          <Row>{renderListProducts()}</Row>
        </CSSTransitionGroup>
      </Container>
    );
  }
}

export default TopProducts;
