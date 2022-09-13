import React from 'react'
import BasicTable from './components/table/Table'
import Header from './components/Header/Header'
import StartLoader from '../../components/StartLoader/StartLoader'
import styles from './styles.module.css'

const HEADER_TEXT = 'Pacman Leaders'

const Leaderboard: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header text={HEADER_TEXT} />
      <BasicTable />
    </div>
  )
}

export default Leaderboard
