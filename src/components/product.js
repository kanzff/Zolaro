import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../store/actions/productAction'

export default function Product(props) {
    const product = props.product
    const history = useHistory()
    const dispatch = useDispatch()

    const addToFav = (id) => {
      dispatch(addFavorite(id))
      // console.log(id)
      history.push('/favorites')
    }

    return (
      <div className="col-3" style={{marginBottom: '12px'}}>
        <div className="card">
          <img className="card-img" src={product.image} style={{height: '53%'}} alt="migg"></img>
          <div className="card-body" style={{textAlign: 'left'}}>
            <h6 className="card-title" style={{textAlign: 'center'}}>{product.title}</h6>
            <div className="card-detail">
              <p className="card-text">Price : <span> $ {product.price}</span></p>
              <Link to={`/products/${product.id}`} className="btn btn-dark">Detail</Link>
              <button onClick={() => addToFav(product.id)} className="btn btn-dark"style={{marginLeft: '50px'}}>Add to favorite</button>
            </div>
          </div>
        </div>
      </div>
    )
}