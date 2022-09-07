import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import ForumReducer from './reducers/ForumReducer'

const rootReducer = combineReducers({
  ForumReducer,
});

export const store = configureStore({
  reducer: rootReducer,
})

// @ts-ignore
window.__store__ = store

export type RootState = ReturnType<typeof rootReducer>

export default store
