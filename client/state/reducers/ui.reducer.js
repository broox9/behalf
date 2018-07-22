import { SHOW_LOADER, HIDE_LOADER } from '../actions/ui.actions'
import { DEFAULT_ECDH_CURVE } from 'tls';

export function uiReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true
      }
    case HIDE_LOADER:
      return {
        ...state,
        showLoader: false
      }
    default:
      return state
  }
}