import axios from 'axios'

// ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

// INITIAL STATE
const defaultProducts = []

// ACTION CREATORS
const getProducts = products => ({type: GET_PRODUCTS, products})
const removeProduct = id => ({ type: REMOVE_PRODUCT, id })

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

// REDUCER
export default function (state = defaultProducts, action) {
  switch (action.type) {

    case GET_PRODUCTS:
      return action.products

    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.id)

    default:
      return state
  }
}
