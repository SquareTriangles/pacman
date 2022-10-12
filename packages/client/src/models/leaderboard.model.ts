export const TEAM_NAME = 'square-triangles';

const RATING_FIELD_NAME = 'score';

export interface ILeaderboardData {
  id: string,
  login: string,
  score: string,
}

export interface IAddLeaderboardUser {
  data: ILeaderboardData
  teamName: typeof TEAM_NAME
  ratingFieldName: typeof RATING_FIELD_NAME
}

export interface IGetLeaderboard {
  ratingFieldName: typeof RATING_FIELD_NAME
  cursor: number
  limit: number
}

