import React, { useState } from 'react';
import {FaCartPlus, FaFacebook, FaTwitter,
FaInstagram, FaLinkedin} from 'react-icons/fa';
import './detailes.scss';
import {useQuery} from 'react-query';
import { useParams } from 'react-router';

    
 
function Details() {
    const [quantity, setQuantity] = useState(1);
    const increment =()=>{
        setQuantity((prevstate)=> prevstate + 1);
    }
    const decrement = () =>{
        setQuantity((prevState)=> {
            if(prevState === 1) return 1
            return prevState -1

        });
    };
    const {id} = useParams();
    const fetchSingleProducts = async ()=>{
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!res.ok){
          throw new Error('Error fetching Data');
        }
        return res.json();
      }
    const {data, isLoading, isError} = useQuery('products', fetchSingleProducts);
    if(isLoading){
     return <h2>Loading..</h2>
    }
    if(isError){
     return <h2>failed to load data</h2>
    }
  
 
  return (
   <>
    <div className='details-main-content'>
        <div className='layout'>
       
            <div className='details-page' key={data?.id}>
                <div className='left'>
                    <img src={data?.image} alt='product img'/>
                </div>
                <div className='right'>
                    <span className='name'>{data?.title}</span>
                    <span className='price'>${data?.price}</span>
                    <span className='desc'>{data?.description}</span>

                    <div className='cartbtns'>
                    <div className='quantity-bbtn'>
                        <span onClick={decrement}>-</span>
                        <span>{quantity}</span>
                        <span onClick={increment}>+</span>
                    </div>
                    <button className='add-to-cart-btn'>
                     <FaCartPlus size={20}/>
                     Add to Cart
                    </button>
                </div>
                <span className='divider'/>
                <div className='info-items'>
                <span className='social-icons'>
                   Share:
                   <FaFacebook size={16}/>
                   <FaTwitter size={16}/>
                   <FaInstagram size={16}/>
                   <FaLinkedin size={16}/>
                   
                </span>
                
                </div>
                
                
            </div>
           </div>
          
        </div>
    </div>
    
   </>
  )
}

export default Details
