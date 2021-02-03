import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'
import useFetch from '../hooks/useFetchData'

export default function Home() {
  const { loading} = (useFetch('https://fakestoreapi.com/products'))
  const { products } = useSelector((state) => state)
  console.log(products)

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