// ACTION TYPES
const TOGGLE_CART = 'TOGGLE CART'

// INITIAL STATE
const defaultState = false

// ACTION CREATORS
export const toggleCart = () => ({ type: TOGGLE_CART })

// REDUCER
export default function reducer (state = defaultState, action) {
  switch(action.type) {
    case TOGGLE_CART:
      return !state
    default:
      return false
  }
}