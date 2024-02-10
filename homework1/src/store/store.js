import { legacy_createStore as createStore, combineReducers } from 'redux'
import { counterReducer } from '../store/reducer'

export const rootReducer = combineReducers({
	state: counterReducer,
})

export const store = createStore(rootReducer)
