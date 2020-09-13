import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const[cart, setCart] = useState([]);

    const handleProduct = (product) => {
        const smaeProduct = cart.find(items => items.key === product.key);
        let count = 1;
        let newCart;
        if(smaeProduct){
            count = smaeProduct.quantity + 1;
            smaeProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, smaeProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        
        addToDatabaseCart(product.key, count);
    };
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(items => <Product
                    key = {items.key}
                     showAddToCart = {true} 
                     product = {items}
                     handleProduct = {handleProduct}>
                     </Product>)
            }
            
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;