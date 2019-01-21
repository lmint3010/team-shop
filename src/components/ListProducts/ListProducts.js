import React from 'react';
import { Container, Row } from 'reactstrap';
import ListItem from './ListItem/ListItem';
import './ListProducts.css';

// Fake Data - Tạm thời, sau này đưa lên API sau
const products = [
    { 
        brand: "iPhone",
        thumbnail: "http://hoangphat360.vn/uploads/products/464890/iphone_x_64gb_chinh_hang.jpg",
        saleOff: '20%'
    },
    { 
        brand: "Samsung",
        thumbnail: "https://blog.clickbuy.shop/wp-content/uploads/2018/10/samsung-galaxy.jpg",
        saleOff: '40%'
    },
    { 
        brand: "Xiaomi",
        thumbnail: "https://www.miespaña.com/10103-large_default/xiaomi-mi-8-6-go-256-go-bleu.jpg",
        saleOff: '35%'
    }
];

const ListProducts = () =>  {
    return (
        <Container className="list-products-container">
            <Row>
                {products.map((p, i) => <ListItem key={i}  product={p} />)}
            </Row>
        </Container>
    );
}

export default ListProducts;
