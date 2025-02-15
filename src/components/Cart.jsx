import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Cart = ({cart}) => {

  const [isScroll, setIsScroll] = useState(false);
  const [cartPosition, setCartPosition] = useState(0);

  useEffect(()=>{
    const cartElement = document.getElementById('cart');
    setCartPosition(cartElement.offsetTop);

    const cartScrollHandler = () => {
      const  scrollPosition = window.scrollY;

      // checking differences between scroll & offset Position ===>
        scrollPosition>=cartPosition ? setIsScroll(true) : setIsScroll(false);
    }

    // attaching this function with event listener =====>

    window.addEventListener('scroll', cartScrollHandler);

    // removing function from event listener====>

    return ()=> {
      window.removeEventListener('scroll', cartScrollHandler);
    }

  },[cartPosition])



  return (
    <section
      id="cart"
      className={`w-75 py-1 mx-auto fixed-top-transition ${isScroll ? 'fixed-top':''} ${isScroll ? 'cart-gradient-bg' : ''}`}
    >
      {/* Cart content */}
      <div className='w-100 d-flex align-items-center justify-content-center flex-wrap flex-sm-column flex-lg-row gap-2 '>
        {
          cart &&  cart.map(c=>(
              <div className='cart-image rounded-2' key={c.id}>
                <img className='w-100 h-100 object-fit-cover rounded-2' src={c.image} alt={c.name} />
              </div>
            ))
        }
      </div>
    </section>
  );
};

Cart.protoTypes={
  cart: PropTypes.array.isRequired,
}

export default Cart;
