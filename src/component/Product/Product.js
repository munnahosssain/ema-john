import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props);

    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <small>by: {seller}</small>
                <p>${price}</p>
                <small>only {stock} left in stock - order soon</small> <br /><br />
                <button className="main-button"
                    onClick={() =>props.handleProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to card
                </button>
            </div>
        </div>
    );
};

export default Product;