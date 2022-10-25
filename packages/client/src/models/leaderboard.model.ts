export const TEAM_NAME = 'pacman';

const RATING_FIELD_NAME = 'score';

export interface ILeaderboardData {
  id: string,
  login: string,
  score: number,
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

