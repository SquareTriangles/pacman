import React from 'react'
import Avatar from '@mui/material/Avatar'
import styles from './styles.module.css'

export type TmessageProps = {
  user: {
    name: string
    photo: string
  }
  date: string
  children: JSX.Element | JSX.Element[] | string
}

const Message: React.FC<TmessageProps> = ({ user, date, children }) => {
  return (
    <div className={styles.message}>
      <div className={`${styles.column} ${styles.column__type_slim}`}>
        <Avatar className={styles.avatar} src={user.photo} />
        <div className={`${styles.title}`}>
          <p className={`${styles.text}`}>{user.name}</p>
          <p className={`${styles.text} ${styles.text__type_date}`}>{date}</p>
        </div>
      </div>
      <div className={`${styles.column} ${styles.column__type_wide}`}>
        {children}
      </div>
    </div>
  )
}

export default Message
