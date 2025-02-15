import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addToList, getLS, removeToLS } from '../assets/ls/utilities';


const Product = ({product, cartHandler, removeHandler }) => {
    
    const [isAdded, setIsAdded] = useState(false);
    
    useEffect(()=>{
        const styleBtn = getLS();
        setIsAdded(styleBtn.includes(product.id));

    }, [product.id])

    const clickHandler = ()=>{
        setIsAdded(!isAdded);
        if (!isAdded) {
            cartHandler(product);
            addToList(product.id)
        } else{
            removeHandler(product);
            removeToLS(product.id)
        } 

    }

    return (
        <div className='col-sm-1 col-lg-3 d-flex flex-column flex-wrap  border glassmorphism'>
            <div className='w-100 card-h'>
                <img className='w-100 h-100 object-fit-cover rounded-3' src={product.image} alt="" />
            </div>
            <div className='w-100 py-2'>
                <h3 className='text-capitalize text-info text-center fs-5'>
                    {product.name}
                </h3>
                <div className='d-flex flex-wrap flex-column align-items-center justify-content-center'>
                    <button onClick={clickHandler} type="button" className={`btn ${isAdded ? 'btn-danger':'btn-primary'} py-2 my-1 w-75`}>{isAdded? 'remove from list':'add to list'}</button>
                </div>
                </div>
            </div>
    );
};
Product.prototype={
    product:PropTypes.object.isRequired,
    cartHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
}
export default Product;