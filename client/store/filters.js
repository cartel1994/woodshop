//ACTION TYPES
const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'

// INITIAL STATE
const defaultFilters = []

// ACTION CREATORS
const addFilter = filter => ({type: ADD_FILTER, filter})
const removeFilter = filter => ({type: REMOVE_FILTER, filter})

// REDUCER
export default function (state = defaultFilters, action) {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.filter]
    case REMOVE_FILTER:
      return state.filter(filter => filter !== action.filter)
    default:
      return state
  }
}
