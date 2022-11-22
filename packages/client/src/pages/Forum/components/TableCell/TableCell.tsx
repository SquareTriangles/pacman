import type React from 'react'
import Avatar from '@mui/material/Avatar'
import { TableCellCustom } from '../../../../components/Table'
//@ts-ignore
import styles from './styles.module.css'

type TletterAvatarTableCell = {
  letter: string
  color: string
}

const LetterAvatarTableCell: React.FC<TletterAvatarTableCell> = ({
  letter,
  color,
}) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_avatar}`}
      align="left"
      size="small"
      sx={{
        padding: '0.5vw',
      }}
      >
      <Avatar sx={{ bgcolor: color }}>{letter}</Avatar>
    </TableCellCustom>
  )
}

type TtextTableCell = {
  text: string
}

const TextTableCell: React.FC<TtextTableCell> = ({ text }) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_text}`}
      align="left"
      size="medium"
      sx={{
        padding: '0.5vw',
      }}
      >
      <p>{text}</p>
    </TableCellCustom>
  )
}

type TtitledNumberTableCell = {
  title: string
  number: number
}

const TitledNumberTableCell: React.FC<TtitledNumberTableCell> = ({
  title,
  number,
}) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_number}`}
      align="right"
      size="small"
      sx={{
        padding: '0.5vw',
      }}
      >
      <div>
        <p className={styles.number}>{number}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </TableCellCustom>
  )
}

export { LetterAvatarTableCell, TitledNumberTableCell, TextTableCell }
