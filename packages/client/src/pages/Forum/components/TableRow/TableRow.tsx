import React from 'react'
import { TableRowCustom } from '../../../../components/Table'
import {
  LetterAvatarTableCell,
  TextTableCell,
  TitledNumberTableCell,
} from '../TableCell/TableCell'
import styles from './styles.module.css'

const TOPIC_ROW_TITLE = 'Ответов'

type TtopicTableRow = {
  color: string
  header: string
  replyNumber: number
  userName: string
  onClick: () => void
}

const TopicTableRow: React.FC<TtopicTableRow> = ({
  header,
  userName,
  replyNumber,
  color,
  onClick,
}) => {
  return (
    <TableRowCustom className={styles.row} onClick={onClick}>
      <LetterAvatarTableCell letter={userName.slice(0, 1)} color={color} />
      <TextTableCell text={header} />
      <TitledNumberTableCell title={TOPIC_ROW_TITLE} number={replyNumber} />
    </TableRowCustom>
  )
}

export { TopicTableRow }
