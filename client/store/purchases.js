import axios from 'axios'

// ACTION TYPES
const GET_PURCHASES = 'GET_PURCHASES'

// INITIAL STATE
const defaultPurchases = []

// ACTION CREATORS
const getPurchases = purchases => ({type: GET_PURCHASES, purchases})

// THUNK CREATORS
export const fetchPurchases = (userId) =>
  dispatch =>
    axios.get(`/api/purchase/${userId}`)
      .then(res =>
        dispatch(getPurchases(res.data || defaultPurchases)))
      .catch(err => console.error(err))

// REDUCER
export default function (state = defaultPurchases, action) {
  switch (action.type) {
    case GET_PURCHASES:
      return action.purchases
    default:
      return state
  }
}
