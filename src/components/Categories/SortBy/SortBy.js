import React from 'react';

import './SortBy.scss';

const SortBy = () => (
  <div className="sortby">
    <div>
      <h5>Sort By</h5>
      <select name="sort-1">
        <option value="Featured">Featured</option>
        <option value="Price-asc">Price Asc</option>
        <option value="Price-desc">Price Desc</option>
      </select>
      <select name="sort-2">
        <option value="Featured">Featured</option>
        <option value="Price-asc">Price Asc</option>
        <option value="Price-desc">Price Desc</option>
      </select>
    </div>
    <p className="sort-by-status">4618 results found in 6ms.</p>
  </div>
)

export default SortBy;