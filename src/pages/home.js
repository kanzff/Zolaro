import React from 'react'
import Product from '../components/product'
import useFetch from '../hooks/fetchData'

export default function Home() {
  const {data: products, loading} = (useFetch('https://fakestoreapi.com/products'))
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1>Products</h1>
          {loading && 
          <div class="d-flex justify-content-center" style={{marginTop: '15px'}}>
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
            </div>
          </div>}
          <div className='products'>
            {products.map(product => {
              return <Product product={product} key={product.id}></Product>
            })}
          </div>
        </div>
      </div>
    </>
  )
}