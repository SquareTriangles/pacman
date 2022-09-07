import { combineReducers } from 'redux';
import ForumReducer from './reducers/ForumReducer'

const store = combineReducers({
  ForumReducer,
})

// @ts-ignore
window.__store__ = store

export type RootState = ReturnType<typeof store>

export default store
