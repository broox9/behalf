import { GET_USERS, GET_USERS_ERROR, UPDATE_USERS } from '../actions/users.actions'

export function usersReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_USERS:
      return action.payload

    default:
      return state
  }
}