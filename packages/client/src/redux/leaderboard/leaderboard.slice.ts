import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ILeaderboardData } from '../../models/leaderboard.model'
import * as actions from './leaderboard.actions'
import type { RootState } from '../store'

interface ILeaderboardState {
  userList: Array<{data: ILeaderboardData}>,
}

const initialState: ILeaderboardState = {
  userList: [],
}

export const leaderboardSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopicList: (state, action: PayloadAction<Array<{data: ILeaderboardData}>>) => {
      state.userList = [...state.userList, ...action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(actions.setScore.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.userList = state.userList.map((item) => {
        if (item.data.login === data.login) {
          return {
            "data": {
              ...data,
            } 
          }
        } return item
      })
    })
    builder.addCase(actions.getTeamLeaderboard.fulfilled, (state, action) => {
      state.userList = action.payload;
    })
  },
})

export const selectLeaderboardUserList = (state: RootState) => state.leaderboard.userList;

export default leaderboardSlice.reducer
