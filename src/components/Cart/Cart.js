import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
        </div>
    );
};

export default Cart;