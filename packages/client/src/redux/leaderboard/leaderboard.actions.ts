import { createAsyncThunk } from '@reduxjs/toolkit'

import LeaderboardService from '../../api/services/leaderboard.services'
import { ILeaderboardData } from '../../models/leaderboard.model'
import { RootState } from '../store';
import { selectLeaderboardUserList } from './leaderboard.slice';


const TEAM_NAME = 'pacman'
const RAITING_FIELD_NAME = 'score'

export const setScore = createAsyncThunk(
  'leaderboard/setScore',
  async (payload: ILeaderboardData, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const currentScore = state.leaderboard.userList.find((item) => item.data.login === payload.login)?.data.score || 0;
    try{
      const { data } = await LeaderboardService.setLeaderBoardUser({
        data: {
          ...payload,
          score: payload.score + currentScore,
        },
        teamName: TEAM_NAME,
        ratingFieldName: RAITING_FIELD_NAME,
      });
      return {
        data: {
          ...payload,
          score: payload.score + currentScore,
        },
        teamName: TEAM_NAME,
        ratingFieldName: RAITING_FIELD_NAME,
      }
    }
    catch(e: any){
      return thunkApi.rejectWithValue(e.response.data.reason)
    }
  }
)

export const getTeamLeaderboard = createAsyncThunk(
  'leaderboard/getTeamleaderboard',
  async (payload: { cursor: number, limit: number } , thunkApi) => {
    const teamName = TEAM_NAME;
    const ratingFieldName = RAITING_FIELD_NAME;
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