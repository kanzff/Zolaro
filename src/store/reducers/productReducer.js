const initialState = {
  products: [],
  productDetail: {},
  isLoading: false
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        isLoading: false
      }
    case 'FETCH_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload,
        isLoading: false
      }
    default: 
      return state
  }
}

export default productReducer