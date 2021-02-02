import React, {useState, useEffect} from 'react'
import Product from '../components/product'

export default function Home() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        (data => {
          setProducts(data)
        })
      )
  }, [])

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <h1>Products</h1>
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