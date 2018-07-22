export const GET_USERS = '[users] GET called';
export const GET_USERS_SUCCESS = '[users] GET success'
export const GET_USERS_ERROR = '[users] GET error'
export const UPDATE_USERS = '[users] update'

// command
export const getUsers = () => ({
  type: GET_USERS
});

export const updateUsers = (payload) => ({
  type: UPDATE_USERS,
  payload,
})