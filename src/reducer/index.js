import { trackerReducer } from './tracker-reducer.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    tracker: trackerReducer
})