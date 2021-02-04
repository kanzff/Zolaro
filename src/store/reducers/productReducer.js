const initialState = {
  products: [],
  productDetail: {},
  favoriteIds: []
  // favorites: this.products.filter(product => {
  //   return this.favoriteIds.indexOf(product.id)
  // })
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      // console.log('masuk reducer')
      // console.log('dari reducer', action.payload)
      return {
        ...state,
        products: action.payload
      }
    case 'FETCH_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload
      }
    // case 'ADD_FAVORITE':
    //   return {
    //     ...state,
    //     favoriteIds: state.favoriteIds.concat(action.payload)
    //   }
    default: 
      return state
  }
}

export default productReducer