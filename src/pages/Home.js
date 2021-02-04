import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../components/product'
import { fetchProducts } from '../store/actions/productAction'

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const { products } = useSelector((state) => state.products)

  return (
    <>
      <div className="row content">
        <h1>Products</h1>
        {/* {loading && 
        <div className="d-flex justify-content-center loading">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        </div>} */}
        <div className='products'>
          {products.map(product => {
            return <Product product={product} key={product.id}></Product>
          })}
        </div>
      </div>
    </>
  )
}