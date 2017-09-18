// ACTION TYPES
const APPLY_CATEGORY = 'APPLY_CATEGORY'

// INITIAL STATE
const defaultCategory = -1

// ACTION CREATORS
export const applyCategory = categoryId => ({type: APPLY_CATEGORY, categoryId})

// REDUCER
export default function (state = defaultCategory, action) {
  switch (action.type) {
    case APPLY_CATEGORY:
      return action.categoryId
    default:
      return state
  }
}
