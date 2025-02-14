import React, { useEffect, useState } from 'react';

const Cart = () => {

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

    window.addEventListener('scroll', cartScrollHandler);
    return ()=> {
      window.removeEventListener('scroll', cartScrollHandler);
    }

  },[cartPosition])



  return (
    <section
      id="cart"
      className={`w-75 border mx-auto fixed-top-transition ${isScroll ? 'fixed-top':''}`}
    >
      {/* Cart content */}
      
    </section>
  );
};

export default Cart;
