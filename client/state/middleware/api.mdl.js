import { API_REQUEST } from '../actions/api.actions'

export const api = ({ dispatch }) => next => action => {

  if (action.type === API_REQUEST) {
    const { method, url, onSuccess, onError } = action.meta
    const opts = { method }

    if (action.payload) {
      opts.body = JSON.stringify(action.payload)
      opts.headers = {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      }
    }

    fetch(url, opts)
      .then(res => res.json())
      .then(data => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }))
  }

  return next(action)
}