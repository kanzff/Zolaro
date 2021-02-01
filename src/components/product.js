import {Component} from 'react'

class Product extends Component {
  render() {
    return (
      <div className="col-3" style={{marginBottom: '12px'}}>
        <div className="card">
          <img className="card-img-top" src={this.props.product.image} style={{height: '53%', objectFit: 'contain'}} alt="migg"></img>
          <div className="card-body" style={{textAlign: 'left'}}>
            <h5 className="card-title" style={{textAlign: 'center'}}>{this.props.product.title}</h5>
          <div className="card-detail">
            <p className="card-text">Category :<span> {this.props.product.category}</span></p>
            <p className="card-text">Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span> $ {this.props.product.price}</span></p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product