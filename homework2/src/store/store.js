import { legacy_createStore as createStore } from 'redux'
import { combineReducers } from 'redux'
import { valueReducer } from './reducer'

export const rootReducer = combineReducers({
  state: valueReducer,
})

export const store = createStore(rootReducer)
