import React from 'react';
import CountUp from 'react-countup';

const Cart = (props) => {
  const { primaryPrice, prevPrimaryPrice, returnPrice, prevReturnPrice } = props

  return (<div className="cart">
    <div className="price">
      <h3 id="totalfare" className="totalfare">
        Rs. 
        <CountUp
          start={prevPrimaryPrice + prevReturnPrice}
          end={primaryPrice + returnPrice}
          className="totalfare"
        />
      </h3>
      <span className="totalfare-int"></span>
      <span>includes all charges (<a id="fbup">fare breakup</a>)</span>
    </div>
    <div className="buy">
      <button>Book</button>
    </div>
  </div>)
};

export default Cart;