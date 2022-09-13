import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import forumReducer from './forum/forum.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    forum: forumReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
