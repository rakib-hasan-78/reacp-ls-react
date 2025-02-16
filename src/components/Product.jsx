import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { addToList, getLS, removeToLS } from '../assets/ls/utilities';

const Product = ({ product, cartHandler, removeHandler }) => {
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const styleBtn = getLS();
        setIsAdded(styleBtn.includes(product.id));
    }, [product.id]);

    const clickHandler = () => {
        setIsAdded(!isAdded);
        if (!isAdded) {
            cartHandler(product);
            addToList(product.id);
        } else {
            removeHandler(product);
            removeToLS(product.id);
        }
    };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center glassmorphism py-3">
            <div className='w-100 card-h mb-3'>
                <img className='w-100 h-100 object-fit-cover rounded-3' src={product.image} alt={product.name} />
            </div>
            <h3 className='text-capitalize text-center text-info fs-5'>{product.name}</h3>
            <button 
                onClick={clickHandler} 
                className={`btn ${isAdded ? 'btn-danger' : 'btn-primary'} w-75 py-2 my-1`}
            >
                {isAdded ? 'Remove from list' : 'Add to list'}
            </button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    cartHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
};

export default Product;
