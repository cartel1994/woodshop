import axios from 'axios'

// ACTION TYPES
const GET_REVIEWS = 'GET_REVIEWS'
const GET_REVIEW = 'GET_REVIEW'

// INITIAL STATE
const defaultReviews = []

// ACTION CREATORS
const getReviews = reviews => ({type: GET_REVIEWS, reviews})
const getReview = review => ({type: GET_REVIEW, review})

// THUNK CREATORS
export const fetchReviews = (productId) =>
  dispatch =>
    axios.get(`/api/reviews/${productId}`)
      .then(res =>
        dispatch(getReviews(res.data || defaultReviews)))
      .catch(err => console.error(err))

export const postReview = (reviewData) =>
  dispatch =>
    axios.post('/api/reviews', reviewData)
      .then(res => res.data)
      .then(review => dispatch(getReview(review)))
      .catch(err => console.error(err))

// REDUCER
export default function (state = defaultReviews, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    case GET_REVIEW:
      return [...state, action.review]
    default:
      return state
  }
}
