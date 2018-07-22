import { updateUsers, GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from '../actions/users.actions'
import { apiRequest } from '../actions/api.actions';

// call for the users
export const getUsersFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === GET_USERS) {
    dispatch(apiRequest('GET', '/users_all', null, GET_USERS_SUCCESS, GET_USERS_ERROR))
  }
}

export const handleUsersCollection = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === GET_USERS_SUCCESS) {
    dispatch(updateUsers(action.payload))
  }
}


// this is a compose to put them in order of flow
export const usersMiddleware = [getUsersFlow, handleUsersCollection]