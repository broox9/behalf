import { getPrayers, updatePrayers, GET_PRAYERS, GET_PRAYERS_SUCCESS, GET_PRAYERS_ERROR, CREATE_PRAYER, CREATE_PRAYER_SUCCESS, CREATE_PRAYER_ERROR } from '../actions/prayers.actions'
import { apiRequest } from '../actions/api.actions'

export const createPrayerFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === CREATE_PRAYER) {
    dispatch(apiRequest('POST', '/create_prayer', action.payload, CREATE_PRAYER_SUCCESS, CREATE_PRAYER_ERROR))
  }
}

export const createPrayerSuccessFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === CREATE_PRAYER_SUCCESS) {
    dispatch(getPrayers())
  }
};

export const getPrayersFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === GET_PRAYERS) {
    dispatch(apiRequest('GET', '/prayers_all', null, GET_PRAYERS_SUCCESS, GET_PRAYERS_ERROR))
  }
};

export const updatePrayersFlow = ({ dispatch }) => next => action => {
  next(action)

  if (action.type === GET_PRAYERS_SUCCESS) {
    dispatch(updatePrayers(action.payload))
  }
};


export const prayersMiddleware = [createPrayerFlow, createPrayerSuccessFlow, getPrayersFlow, updatePrayersFlow];
