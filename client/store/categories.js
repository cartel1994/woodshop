import axios from 'axios'

// ACTION TYPES
const GET_CATEGORIES = 'GET_CATEGORIES'

// INITIAL STATE
const defaultCategories = []

// ACTION CREATORS
const getCategories = categories => ({type: GET_CATEGORIES, categories})

// THUNK CREATORS
export const fetchCategories = () =>
  dispatch =>
    axios.get('/api/categories')
      .then(res => res.data)
      .then(categories => dispatch(getCategories(categories)))
      .catch(err => console.error(err))

// REDUCER
export default function (state = defaultCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
