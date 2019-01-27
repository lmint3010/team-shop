import React from 'react';

import ListProducts from "../ListProducts/ListProducts";
import TopProducts from "../TopProducts/TopProducts";
import Carousel from "../Carousel/Carousel";
import TopBrands from "../TopBrands/TopBrands";

const Home = () => <div>
      <Carousel />
      <ListProducts />
      <TopProducts />
      <TopBrands />
</div>

export default Home