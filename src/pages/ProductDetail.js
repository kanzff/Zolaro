import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/fetchData'

export default function ProductDetail() {
  const { id } = useParams()
  const {data: product, loading} = (useFetch(`https://fakestoreapi.com/products/${id}`))
  
  return (
    <div className="row">
      <h1>Product Detail</h1>
      <div className="col-8 offset-2 product-detail">
        <div className="card">
          {loading && 
            <div className="d-flex justify-content-center loading">
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only"></span>
              </div>
            </div>}
          {!loading && 
            <div className="row product-detail-card">
              <div className="col-4">
                <img src={product.image} className="card-img" alt=".."></img>
              </div>
              <div className="col-7 offset-1" style={{textAlign: "left"}}>
                <h4>{product.title}</h4><br></br><br></br>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.description}</p>
                <div className="card-detail">
                  <p>Category : {product.category}</p>
                  <p>Price : ${product.price}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}