export function fetchProducts() { //tdi nya ada param data
  // return {
  //   type: 'FETCH_PRODUCTS',
  //   payload: data
  // }

  return async (dispatch) => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      )
      const data = await response.json()
      // console.log(data)

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
  // return {
  //   type: 'FETCH_PRODUCT_DETAIL',
  //   payload: data
  // }

  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      )
      const data = await response.json()
      console.log(data)

      dispatch({
        type: 'FETCH_PRODUCT_DETAIL',
        payload: data
      })
    } catch (err) {
      console.log(err)
    }
  }
}

// export const addFavorite = (id) => {
//   return {
//     type: 'ADD_FAVORITE',
//     payload: id
//   }
// }