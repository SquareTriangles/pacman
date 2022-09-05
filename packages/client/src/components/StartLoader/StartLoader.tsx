import React from 'react'
import styles from './styles.module.css'

const LOADER_TEXT = 'lOAdIng ...'

const StartLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <p className={styles.text}>{LOADER_TEXT}</p>
      <div className={styles.polling} />
    </div>
  )
}

export default StartLoader
