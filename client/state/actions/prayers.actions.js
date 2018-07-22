export const GET_PRAYERS = '[prayers] GET';
export const GET_PRAYERS_SUCCESS = '[prayers] GET success'
export const GET_PRAYERS_ERROR = '[prayers] GET error'
export const UPDATE_PRAYERS = '[prayers] UPDATE'
export const CREATE_PRAYER = '[prayers] CREATE'
export const CREATE_PRAYER_SUCCESS = '[prayers] CREATE success'
export const CREATE_PRAYER_ERROR = '[prayers] CREATE error'

// command
export const getPrayers = () => ({
  type: GET_PRAYERS
});

export const createPrayer = payload => ({
  type: CREATE_PRAYER,
  payload
})

export const updatePrayers = payload => ({
  type: UPDATE_PRAYERS,
  payload,
})