import { api, ApiResponse } from '../api'

import { IAddLeaderboardUser, IGetLeaderboard, ILeaderboardData } from '../../models/leaderboard.model'

const LeaderboardService = {
  getTeamLeaderboard(teamName:string, data: IGetLeaderboard): Promise<ApiResponse<Array<{data: ILeaderboardData}>>> {
    return api.post(`/leaderboard/${teamName}`, data)
  },

  setLeaderBoardUser(data:IAddLeaderboardUser ): Promise<ApiResponse> {
    return api.post('/leaderboard', data)
  }
}

export default LeaderboardService
