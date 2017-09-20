import axios from 'axios'

// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const GET_PRODUCT = 'GET_PRODUCT'

// INITIAL STATE
const defaultProducts = []

// ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})
const removeProduct = id => ({ type: REMOVE_PRODUCT, id })
const getProduct = product => ({type: GET_PRODUCT, product})

// THUNK CREATORS
export const fetchProducts = () =>
  dispatch =>
    axios.get('/api/products')
      .then(res =>
        dispatch(getProducts(res.data || defaultProducts)))
      .catch(err => console.error(err))

export const destroyProduct = id => dispatch => {
  dispatch(removeProduct(id))
  axios.delete(`/api/products/${id}`)
    .catch(err => console.error(err))
}

export const postProduct = (productData) =>
  dispatch =>
    axios.post('/api/products', productData)
      .then(res => res.data)
      .then(product => dispatch(getProduct(product)))
      .catch(err => console.error(err))

// REDUCER
export default function (state = defaultProducts, action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return action.products

    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.id)

    case GET_PRODUCT:
      return [...state, action.product]

    default:
      return state
  }
}
