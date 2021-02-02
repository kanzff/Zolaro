import React from 'react'

export default function Product(props) {
    const product = props.product
    return (
      <div className="col-3" style={{marginBottom: '12px'}}>
        <div className="card">
          <img className="card-img-top" src={product.image} style={{height: '53%', objectFit: 'contain'}} alt="migg"></img>
          <div className="card-body" style={{textAlign: 'left'}}>
            <h6 className="card-title" style={{textAlign: 'center'}}>{product.title}</h6>
          <div className="card-detail">
            <p className="card-text">Category :<span> {product.category}</span></p>
            <p className="card-text">Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span> $ {product.price}</span></p>
          </div>
          </div>
        </div>
      </div>
    )
}