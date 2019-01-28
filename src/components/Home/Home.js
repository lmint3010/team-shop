import React from 'react';

import ListProducts from "../ListProducts/ListProducts";
import TopProducts from "../TopProducts/TopProducts";
import Carousel from "../Carousel/Carousel";
import TopBrands from "../TopBrands/TopBrands";
import Subcribe from "../Subcribe/Subcribe"

const Home = () => <div>
      <Carousel />
      <ListProducts />
      <TopProducts />
      <TopBrands />
      <Subcribe />
</div>

export default Home