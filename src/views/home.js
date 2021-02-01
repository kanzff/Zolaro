import react from 'react'
import Product from '../components/product'

class Home extends react.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(
        (data => {
          console.log(data)
          this.setState({
            products: data
          })
          console.log(this.state.products)
        })
      )
  }

  render() {
    return (
      <>
        <div className="row">
          <h1>Products</h1>
          <div className='products'>
            {this.state.products.map(product => {
              return <Product product={product} key={product.id}></Product>
            })}
          </div>
        </div>
      </>
    )
  }

}

export default Home