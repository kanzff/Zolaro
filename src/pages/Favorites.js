import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'
import useFetch from '../hooks/useFetchData'

export default function Favorites() {
  const { loading } = (useFetch('https://fakestoreapi.com/products'))
  const { products, favoriteIds } = useSelector((state) => state)

  console.log(favoriteIds)

  const favorites = products.filter(product => {
    return favoriteIds.indexOf(product.id) >-1
  })

  // console.log('ini products', products)
  // console.log('ini fav', favorites)



  return (
    <>
      <div className="row content">
        <h1>Favorites</h1>
        {loading && 
        <div className="d-flex justify-content-center loading">
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only"></span>
          </div>
        </div>}
        <div className='products'>
          {favorites.map(product => {
            return <Product product={product} key={product.id}></Product>
          })}
        </div>
      </div>
    </>
  )
}