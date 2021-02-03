import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetchData'

export default function ProductDetail() {
  const { id } = useParams()
  const { loading } = (useFetch(`https://fakestoreapi.com/products/${id}`))
  const { productDetail } = useSelector((state) => state)
  
  return (
    <div className="row content">
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
                <img src={productDetail.image} className="card-img" alt=".."></img>
              </div>
              <div className="col-7 offset-1" style={{textAlign: "left"}}>
                <h4>{productDetail.title}</h4><br></br><br></br>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{productDetail.description}</p>
                <div className="card-detail">
                  <p>Category : {productDetail.category}</p>
                  <p>Price : ${productDetail.price}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}