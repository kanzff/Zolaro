import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/product'

export default function Favorites(props) {
  const { products } = useSelector((state) => state.products)
  const { favoriteIds } = useSelector((state) => state.favorites)

  const favorites = products.filter(product => {
    return favoriteIds.indexOf(product.id) >-1
  })

  return (
    <>
      <div className="row content">
        <h1>Favorites</h1>
        <div className='products'>
          {favorites.map(product => {
            return <Product product={product} key={product.id}></Product>
          })}
        </div>
      </div>
    </>
  )
}