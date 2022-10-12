import { createAsyncThunk } from '@reduxjs/toolkit'

import LeaderboardService from '../../api/services/leaderboard.services'
import { IAddLeaderboardUser, IGetLeaderboard } from '../../models/leaderboard.model'


export const setScore = createAsyncThunk(
  'leaderboard/setScore',
  async (payload: IAddLeaderboardUser, thunkApi) => {
    try{
      const { data } = await LeaderboardService.setLeaderBoardUser(payload);
      return payload;
    }
    catch(e: any){
      return thunkApi.rejectWithValue(e.response.data.reason)
    }
  }
)

export const getTeamLeaderboard = createAsyncThunk(
  'leaderboard/getTeamleaderboard',
  async (payload: { cursor: number, limit: number } , thunkApi) => {
    const teamName = 'pacman'
    const ratingFieldName = 'score'
    const {
      cursor,
      limit,
    } = payload;
    try {
      const { data } = await LeaderboardService.getTeamLeaderboard(
        teamName,
        {
          ratingFieldName,
          cursor,
          limit,
        }
      )
      return data
    }
    catch (e: any) {
      return thunkApi.rejectWithValue(e.response.data.reason)
    }
  }
)