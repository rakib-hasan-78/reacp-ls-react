import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Cart = ({ cart }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [cartPosition, setCartPosition] = useState(0);

    useEffect(() => {
        const cartElement = document.getElementById('cart');
        setCartPosition(cartElement.offsetTop);

        const cartScrollHandler = () => {
            const scrollPosition = window.scrollY;
            scrollPosition >= cartPosition ? setIsScroll(true) : setIsScroll(false);
        };

        window.addEventListener('scroll', cartScrollHandler);

        return () => {
            window.removeEventListener('scroll', cartScrollHandler);
        };
    }, [cartPosition]);

    return (
        <section
            id="cart"
            className={`w-100 py-1 fixed-top-transition ${isScroll ? 'fixed-top' : ''} ${isScroll ? 'cart-gradient-bg' : ''}`}
        >
            <div className='w-100 d-flex flex-wrap align-items-center justify-content-center gap-2'>
                {
                    cart && cart.map(c => (
                        <div className='cart-image rounded-2' key={c.id}>
                            <img className='w-100 h-100 object-fit-cover rounded-2' src={c.image} alt={c.name} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};

export default Cart;
