export function fetchProducts() {
  
  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      )
      const data = await response.json()

      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export function fetchProductDetail(id) {
  
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      )
      const data = await response.json()

      dispatch({
        type: 'FETCH_PRODUCT_DETAIL',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}