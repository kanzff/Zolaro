import React from 'react'
import Product from '../components/product'
import useFetch from '../hooks/fetchData'

export default function Home() {
  const {data: products, loading} = (useFetch('https://fakestoreapi.com/products'))
  
  return (
    <>
      <div className="row">
        <h1>Products</h1>
        {loading && 
        <div className="d-flex justify-content-center loading">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        </div>}
        <div className='products'>
          {products.map(product => {
            return <Product product={product} key={product.id}></Product>
          })}
        </div>
      </div>
    </>
  )
}