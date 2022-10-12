import React from 'react'
import BasicTable from './components/table/Table'
import Header from './components/Header/Header'
import { useAppSelector } from '../../hooks'
import { selectLeaderboardUserList } from '../../redux/leaderboard/leaderboard.slice'
import styles from './styles.module.css'

const HEADER_TEXT = 'Pacman Leaders'

const Leaderboard: React.FC = () => {
  const leaderboardList = useAppSelector(selectLeaderboardUserList);
  console.log(leaderboardList)
  return (
    <div className={styles.leaderboard}>
      <Header text={HEADER_TEXT} />
      <BasicTable />
    </div>
  )
}

export default Leaderboard
