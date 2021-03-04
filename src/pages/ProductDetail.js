import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductDetail } from '../store/actions/productAction'

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchProductDetail(id))
  }, [dispatch, id])

  const { productDetail, isLoading } = useSelector((state) => state.products)
  
  return (
    <div className="row content">
      <h1>Product Detail</h1>
      <div className="col-8 offset-2 product-detail">
        <div className="card">
          {isLoading && 
            <div className="d-flex justify-content-center loading">
              <div className="spinner-border text-dark" role="status">
                <span className="sr-only"></span>
              </div>
            </div>}
          {!isLoading && 
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