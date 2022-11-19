import type React from 'react'
import DiscussionForm, {
  TdiscussionformData,
} from '../Forms/DiscussionForm/DiscussionForm'
import Message from '../Message/Message'
//@ts-ignore
import styles from './styles.module.css'

export type Tmessage = {
  user: {
    name: string
    photo: string
  }
  date: string
  body: string
}

type DtiscussionProps = {
  header: string
  data: Tmessage[]
  addMessage: (data: TdiscussionformData) => void
}

const Discussion: React.FC<DtiscussionProps> = ({
  header,
  data,
  addMessage,
}) => {
  const handleSubmitDiscussionForm = (data: TdiscussionformData) => {
    addMessage(data)
  }

  return (
    <div className={styles.body}>
      <h2 className={styles.header}>{header}</h2>
      {data.map(({ user, date, body }, index) => {
        return (
          <Message key={index} user={user} date={date}>
            <p className={styles.messageText}>{body}</p>
          </Message>
        )
      })}
      <DiscussionForm handleSubmit={handleSubmitDiscussionForm} />
    </div>
  )
}

export default Discussion
