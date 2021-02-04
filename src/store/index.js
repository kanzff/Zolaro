import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import logger from './middleware/logger'

const store = createStore(productReducer, applyMiddleware(logger, thunk))

export default store