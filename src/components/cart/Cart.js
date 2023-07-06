import React from 'react';
import {MdClose} from 'react-icons/md';
import './cart.scss';

function Cart({setShowCart}) {
  return (
    <>
    <div className='cart-section'>
        <div className='opacity-low'></div>
        <div className='cart-content'>
        <div className='cart-header'>
        <span className='heading'>Shoping Cart</span>
            <span  className='clsbtn' onClick={()=>setShowCart(false)}>
            <MdClose size={25} />
            <span className='text'>Close</span>
            </span>
        </div>
          
        </div>
    </div>
      
    </>
  )
}

export default Cart
