import { configureStore } from '@reduxjs/toolkit'
import ForumReducer from './reducers/ForumReducer'

const store = configureStore({
  reducer: {
    ForumReducer,
  },
})

// @ts-ignore
window.__store__ = store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
