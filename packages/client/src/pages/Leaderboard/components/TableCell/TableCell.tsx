import React from 'react'
import Avatar from '@mui/material/Avatar'
import { TableCellCustom } from '../../../../components/Table'
import laurelImage from '../../../../assets/images/laurel.png'
import pacmanImage from '../../../../assets/images/pacman.png'
import coinImage from '../../../../assets/images/money.png'
import styles from './styles.module.css'

type TtableCellNumber = {
  orderNumber: number
}

const TableCellNumber: React.FC<TtableCellNumber> = ({ orderNumber }) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_number}`}
      size="small"
      align="left"
      sx={{
        padding: '0 0 0 0.5vw',
      }}
      >
      <div>
        <img src={laurelImage} />
        <p className={styles.tableCell__text}>{orderNumber}</p>
      </div>
    </TableCellCustom>
  )
}

type TtableCellName = {
  name: string
  image: string
}

const TableCellName: React.FC<TtableCellName> = ({ name, image }) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_name}`}
      size="medium"
      align="left"
      sx={{
        padding: '0.5vw 0.25vw 0.5vw 0.25vw',
      }}
      >
      <div>
        <Avatar 
          src={pacmanImage} 
          sx={{
            padding: '0 0.5vw 0 5px',
          }}
        />
        <p className={`${styles.tableCell__text}`}>{name}</p>
      </div>
    </TableCellCustom>
  )
}

type TtableCellScore = {
  score: number
}

const TableCellScore: React.FC<TtableCellScore> = ({ score }) => {
  return (
    <TableCellCustom
      className={`${styles.tableCell} ${styles.tableCell__type_score}`}
      size="small"
      align="right"
      sx={{
        padding: '0 0.5vw 0 5px',
      }}
      >
      <div>
        <Avatar className={styles.icon} src={coinImage} />
        <div className={styles.container}>
          <p className={`${styles.tableCell__text}`}>{score}</p>
        </div>
      </div>
    </TableCellCustom>
  )
}

export { TableCellNumber, TableCellName, TableCellScore }
