import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import favoriteReducer from './reducers/favoriteReducer'
import logger from './middleware/logger'

const rootReducer = combineReducers({
  products: productReducer,
  favorites: favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store