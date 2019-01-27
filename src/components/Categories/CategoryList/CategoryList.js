import React from 'react';
import './CategoryList.scss';

import CardProduct from './CardProduct/CartProduct';

const CategoryList = () => {
  return (
    <div className="categoryList">
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </div>
  )  
}

export default CategoryList;