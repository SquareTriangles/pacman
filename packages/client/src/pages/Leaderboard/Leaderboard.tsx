import React from 'react'
import BasicTable from './components/table/Table'
import Header from './components/Header/Header'
import styles from './styles.module.css'

const HEADER_TEXT = 'Pacman Leaders'

const Leaderboard: React.FC = () => {
  return (
    <div className={styles.leaderboard}>
      <Header text={HEADER_TEXT} />
      <BasicTable />
    </div>
  )
}

export default Leaderboard
