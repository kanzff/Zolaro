const initialState = {
  products: [],
  productDetail: {},
  favoriteIds: []
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'FETCH_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload
      }
    default: 
      return state
  }
}

export default productReducer