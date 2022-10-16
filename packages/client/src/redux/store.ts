import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import forumReducer from './forum/forum.slice';
import leaderboardSlice from './leaderboard/leaderboard.slice'

const store = configureStore({
  reducer: {
    user: userReducer,
    forum: forumReducer,
    leaderboard: leaderboardSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store
