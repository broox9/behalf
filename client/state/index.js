import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import { usersReducer } from './reducers/users.reducer'
import { prayersReducer } from './reducers/prayers.reducer'

import { usersMiddleware } from './middleware/users.mdl'
import { prayersMiddleware } from './middleware/prayers.mdl'
import { api } from './middleware/api.mdl'


const reducers = combineReducers({
  users: usersReducer,
  prayers: prayersReducer,
  // ui: state => state //TODO: replace later
})

const initialState = { users: [], prayers: [], ui: { showLoader: false } }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //ReduxDevTools

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(
    applyMiddleware(...usersMiddleware, ...prayersMiddleware, api)
  )
)