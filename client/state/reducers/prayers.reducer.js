import { UPDATE_PRAYERS } from '../actions/prayers.actions'

export function prayersReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_PRAYERS:
      return action.payload
    default:
      return state
  }
}