import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import products from './products'
import searchInput from './searchInput'
import filters from './filters'

const reducer = combineReducers({user, products, searchInput, filters})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './searchInput'
export * from './filters'
