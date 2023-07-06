import React, { useState } from 'react';
import {MdClose} from 'react-icons/md';
import {useQuery} from 'react-query';
import {fetchProducts} from '../components/bannar/Bannar';
import {useNavigate} from 'react-router-dom';
import './search.scss';

function Search({setShowSearch}) {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  const onchange = (e)=>{
    setQuery(e.target.value);


  }
  const {data, isLoading, isError} = useQuery('products', fetchProducts);
  if(isLoading){
   return <h2>Loading..</h2>
  }
  if(isError){
   return <h2>failed to load data</h2>
  }
  return (
      <>
      <div className='search-model'>
        <div className='form-filed'>
          <input type='text' placeholder='search for product' autoFocus onChange={onchange} value={query}/>
          <MdClose size={25} className='close' onClick={()=>setShowSearch(false)}/>
        </div>
        <div className='search-result-content'>
        {data?.length ? (
          <div className='search-results'>
            {data?.filter((f)=>{
            if(!query?.length){
              return null;
            }else if (f?.title.toLowerCase().includes(query.toLowerCase())){
              return f;
            }
            return false;
           })
            .map((f)=>(
              <div className='search-result-items' key={f?.id} onClick={()=>{
                navigate("/product/" + f?.id)
                setShowSearch(false);
              }}>
                <div className='img-container'>
                  <img src={f?.image} alt='product-img'/>
                </div>
                <div className='product-details'>
                  <div className='name'>{f?.title}</div>
                  <div className='desc'>{f?.description}</div>
                </div>
              </div>

            ))}
            
            </div>
          ): null}
           
      
        </div>
      </div>
        
      </>
  )
}

export default Search
