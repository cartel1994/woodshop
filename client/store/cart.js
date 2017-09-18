import axios from 'axios'

// ACTION TYPES
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const ADD_CART_ITEM = 'ADD_CART_ITEM'

// INITIAL STATE
const defaultCart = []

// ACTION CREATORS
export const getCartItems = (cartItems) => {
  const action = { type: GET_CART_ITEMS, cartItems }
  return action
}

// TODO: This should be refactored into an axios post into sessions
export const addCartItem = (newCartItem) => {
  const action = { type: ADD_CART_ITEM, newCartItem }
  return action
}

// export const changeCartItemQuantity = () => {

// }

// THUNK CREATORS
export const fetchCartItems = () => {
  return (dispatch) => {
    return axios.get('/api/cart')
      .then(res => res.data)
      .then(cartItems => dispatch(getCartItems(cartItems)))
      .catch(err => console.error(err))
  }
}

export const postCartItem = (cartItem) =>
  dispatch =>
    axios.post('/api/cart', cartItem)
      .then(res => {
        dispatch(addCartItem(res.data))
      })
      .catch(err => console.error(err))

// REDUCER
export default function (state = defaultCart, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return action.cartItems
    case ADD_CART_ITEM:
      return [...state, action.newCartItem]
    default:
      return state
  }
}
