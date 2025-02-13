import React from 'react';
import Header from './Header';
import Products from './Countries';


const Base = () => {
    return (
        <section className='w-100 min-vh-100'>
            <div className='container-xl d-flex flex-column align-items-center justify-content-center '>
                <Header />
                <Products />
            </div>            
        </section>
    );
};

export default Base;