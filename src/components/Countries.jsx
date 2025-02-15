import React, { useEffect, useState } from 'react';
import Product from './Product';
import Cart from './Cart';
import { addToList, removeToLS } from '../assets/ls/utilities';

const Products = () => {

    const [products, setProducts]= useState([]);

    const [cart, setCart] = useState([]);

    console.log(products.length)
    useEffect(() => {
        fetch('../../data/db.json')
            .then(response=>response.json())
            .then(data=> setProducts(data))    
    }, []);

    const cartHandler = (product)=>{
        setCart(prev=>{
            if (prev.some(prev=>prev.id===product.id)) return prev;
            addToList(product.id);
            return [...prev, product];
        })
    }

    const removeHandler = (product)=>{
        setCart(prev=> prev.filter(value=>value.id!==product.id));
        removeToLS(product.id)
    }



    return (
        <section className='w-100 h-auto d-flex flex-sm-column flex-lg-row flex-wrap align-items-center justify-items-center'>
            <Cart cart ={cart} />
            <div className="w-100 row gap-5 ">
                <div className="col-sm-1 col-lg-12 d-flex flex-wrap align-items-center justify-content-center gap-3 py-3">
                    {
                     products && products.map(product=>(
                        <Product key={product.id} product={product} cartHandler={cartHandler} removeHandler ={removeHandler } />
                     ))   
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;