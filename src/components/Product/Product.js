import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h1>{props.product.name}</h1>
        </div>
    );
};

export default Product;