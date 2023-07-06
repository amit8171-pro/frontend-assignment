import React, {useState } from 'react';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {CgShoppingCart} from 'react-icons/cg';
import './navbar.scss';
import { useNavigate } from 'react-router';
import Search from '../../pages/Search';
import Cart from '../cart/Cart';


export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

 
  return (
      <>
        <header className='headers'>
          <div className= 'header'>
            <div className='header-left'>
              <ul>
                <li onClick={()=>{navigate("/")}}>Home</li>
              </ul>
            </div>
            <div className='header-center'>
                   <span className='heading' onClick={()=>navigate("/")}>OnlineStore</span>
            </div>
            <div className='header-icons'>
                <div className='shearch-icon' onClick={()=>setShowSearch(true)}><BsSearch/></div>
                <AiOutlineHeart/>
               <div className='cart-icons' onClick={()=>setShowCart(true)}>
               <CgShoppingCart/>
               <div className='count'>0</div>
                

               </div>
                </div>
          </div>
      
        </header>
      
  


    {showSearch && <Search setShowSearch={setShowSearch}/>}
    {showCart && <Cart setShowCart={setShowCart}/>}
      
    </>
  )
}
