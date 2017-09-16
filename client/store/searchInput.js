// ACTION TYPES
const WRITE_SEARCH = 'WRITE_SEARCH'

// INITIAL STATE
const defaultSearch = ''

// ACTION CREATORS
export const writeSearch = input => ({type: WRITE_SEARCH, input})

// REDUCER
export default function (state = defaultSearch, action) {
  switch (action.type) {
    case WRITE_SEARCH:
      return action.input
    default:
      return state
  }
}
