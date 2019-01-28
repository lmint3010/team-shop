import React from 'react';
import { Form, Input } from 'reactstrap';
import './SearchProducts.scss';

const SearchProducts = () => {
    return (
        <div className="search-product-block">
            <Form>
                <Input className="search-product" placeholder="Search a product" />
            </Form>
        </div>
      
    )
}

export default SearchProducts;