import React from 'react';
import PropTypes, { object } from 'prop-types';

const Product = ({product}) => {
    return (
        <div className='col-sm-1 col-lg-3 d-flex flex-column flex-wrap  border glassmorphism px-1'>
            <div className='w-100 card-h'>
                <img className='w-100 h-100 object-fit-cover rounded-3' src={product.image} alt="" />
            </div>
            <div className='w-100 py-2'>
                <h3 className='text-capitalize text-info text-center fs-5'>
                    {product.name}
                </h3>
                <div className='d-flex flex-wrap flex-column align-items-center justify-content-center'>
                    <button type="button" className='btn btn-primary py-2 my-1 w-75'>add to list</button>
                    <button type="button" className='btn btn-danger py-2 my-1 w-75'>add to list</button>
                </div>
                </div>
            </div>
    );
};
Product.prototype={
    product:PropTypes.object.isRequired,
}
export default Product;