import React from 'react';
import { Col } from 'reactstrap';

import '../TopProducts.css';

const Product = ({propsDetail}) => {
  return (
    <Col xs="4" md="4" sm="3" lg="3">
      <div className="wrapper">
          <div className="sale">
                  20% off
              </div>
          <div className="item">
              <div className="image">
                  <img src={propsDetail.img}
                  alt="product" />
              </div>
              <div className="__product">
                  <p className="subtitle">Apple</p>
                  <h3 className="title">{propsDetail.name}</h3>
                  <p className="price">$ {propsDetail.price}</p>
                  <button className="add2card">Add To Cart</button>
              </div>
          </div>
      </div>
    </Col>
  );
}

export default Product;
