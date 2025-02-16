import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { addToList, getLS, removeToLS } from '../assets/ls/utilities';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/data/db.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            const storedCart = getLS();
            let savedCart = [];
            storedCart.forEach(value => {
                const product = products.find(product => product.id === value);
                savedCart.push(product);
            });
            setCart(savedCart);
        }
    }, [products]);

    const cartHandler = (product) => {
        setCart(prev => {
            if (prev.some(prev => prev.id === product.id)) return prev;
            addToList(product.id);
            return [...prev, product];
        });
    };

    const removeHandler = (product) => {
        setCart(prev => prev.filter(value => value.id !== product.id));
        removeToLS(product.id);
    };

    return (
        <section className='w-100 py-5'>
            <div className="row">
                {
                    cart.length > 0 && <Cart cart={cart} />
                }
                <div className="col-12 d-flex flex-wrap justify-content-center gap-4">
                    {
                        products && products.map(product => (
                            <Product 
                                key={product.id} 
                                product={product} 
                                cartHandler={cartHandler} 
                                removeHandler={removeHandler} 
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;
