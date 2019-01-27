import React from 'react';

import './CardProduct.scss';

const imgUrl = 'http://www.ikea.com/us/en/images/products/legitim-chopping-board-white__0119427_PE275744_S4.JPG';

const CardProduct = () => {
  return (
    <div className="card-product">
      <div className="card-image">
        <i class="fa fa-heart card-like" aria-hidden="true"></i>
        <img src={imgUrl} />
      </div>
      <div className="card-content">
        <i class="fa fa-shopping-cart card-buying" aria-hidden="true"></i>
        <h3 className="card-title">Card Title</h3>
        <p className="card-price">$2.49</p>
      </div>
    </div>
  )
}

export default CardProduct;