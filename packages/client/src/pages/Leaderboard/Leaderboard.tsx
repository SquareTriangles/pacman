import React from 'react'
import ScoreTable from './components/table/Table'
import Header from './components/Header/Header'
import { useAppSelector } from '../../hooks'
import { selectLeaderboardUserList } from '../../redux/leaderboard/leaderboard.slice'
import styles from './styles.module.css'

const HEADER_TEXT = 'Pacman Leaders'


const Leaderboard: React.FC = () => {
  const leaderboardList = useAppSelector(selectLeaderboardUserList) || [];
  const tableData = leaderboardList.map((item) => ({
    name: item.data.login,
    image: '',
    score: item.data.score,
  })).sort((item) => item.score).reverse();
  return (
    <div className={styles.leaderboard}>
      <Header text={HEADER_TEXT} />
      <ScoreTable data={tableData} />
    </div>
  )
}

export default Leaderboard
