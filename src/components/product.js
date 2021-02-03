import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const product = props.product
    return (
      <div className="col-3" style={{marginBottom: '12px'}}>
        <div className="card">
          <img className="card-img" src={product.image} style={{height: '53%'}} alt="migg"></img>
          <div className="card-body" style={{textAlign: 'left'}}>
            <h6 className="card-title" style={{textAlign: 'center'}}>{product.title}</h6>
            <div className="card-detail">
              <p className="card-text">Price : <span> $ {product.price}</span></p>
              <Link to={`/products/${product.id}`} className="btn btn-dark">Detail</Link>
            </div>
          </div>
        </div>
      </div>
    )
}