export const fetchProducts = (data) => {
  // console.log('masuk action')
  // console.log('ini data',data)
  return {
    type: 'FETCH_PRODUCTS',
    payload: data
  }
}

export const fetchProductDetail = (data) => {
  // console.log('masuk action')
  // console.log('ini data',data)
  return {
    type: 'FETCH_PRODUCT_DETAIL',
    payload: data
  }
}

export const addFavorite = (id) => {
  return {
    type: 'ADD_FAVORITE',
    payload: id
  }
}