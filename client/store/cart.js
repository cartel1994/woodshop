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

export const addCartItem = (newCartItem) => {
  const action = { type: ADD_CART_ITEM, newCartItem }
  return action
}

export const removeCartItem = (deletedItemId) => {
  const action = { type: REMOVE_CART_ITEM, deletedItemId }
  return action
}

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

export const deleteCartItemFromBackend = (itemToDelete) => {
  return (dispatch) => {
    return axios.delete('/api/cart', { params: {
      idToDelete: itemToDelete.id
    }})
      .then(res => res.data)
      .then(data => dispatch(removeCartItem(data.deletedId)))
      .catch(err => console.error(err))
  }
}

// // Export changeCartItemQuantity
// export const putCartItem = (cartItem) => {
//   return (dispatch) => {
//     return axios.put('/api/cart', cartItem)
//       // .then(res => res.data)
//       // .then(updatedCartItem)
//       // .catch(err => console.error(err))
//   }
// }


// REDUCER
export default function (state = defaultCart, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      return action.cartItems
    case ADD_CART_ITEM:
      return [...state, action.newCartItem]
    case REMOVE_CART_ITEM:
      return state.filter((cartItem) => cartItem.id != action.deletedItemId)
    default:
      return state
  }
}
