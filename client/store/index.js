import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import products from './products'
import product from './product'
import reviews from './reviews'
import users from './users'
import searchInput from './searchInput'
import filters from './filters'
import cart from './cart'
import toggleCart from './toggleCart'

const reducer = combineReducers({
  user,
  products,
  searchInput,
  toggleCart,
  product,
  reviews,
  users,
  cart,
  toggleCart
})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './searchInput'
export * from './filters'
export * from './cart'
export * from './toggleCart'
export * from './product'
export * from './reviews'
export * from './users'
