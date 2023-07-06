import React from 'react';
import { useNavigate} from 'react-router';
import './bannar.scss';
import { useQuery } from 'react-query';



export const fetchProducts = async () => {
  
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Error fetching Data');
  }
  return res.json();
}

function Bannar() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery('products', fetchProducts);
  
  if (isLoading) {
    return <h2>Loading..</h2>
  }
  if (isError) {
    return <h2>failed to load data</h2>
  }
  console.log(data);
  

  return (
      <>
      <div className='product-container'>
        <div className='products'>
        {data?.map((items) => (
          
          <div className='product-card' key={items?.id} onClick={()=>{navigate(`/product/${items.id}`)}}>
            <div className='thumbnail' >
              <img src={items?.image} alt='' />
            </div>
            <div className='products-details'>
              <span className='name'>{items?.title}</span>
              <span className='price'>${items?.price}</span>
            </div>

          </div>
          ))}

        </div>
      </div>

      </>
  )
}

export default Bannar
