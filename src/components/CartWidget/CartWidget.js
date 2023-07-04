import React from 'react';
import './CartWidget.css';


const CartWidget = () => {
  return (
    <div className="CartWidget">
      <button className='CartButton'>🛒</button>
      <span className="CartWidgetCount">0</span>
    </div>
  );
}

export default CartWidget;