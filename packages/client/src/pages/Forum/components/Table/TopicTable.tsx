import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { TopicTableRow } from '../TableRow/TableRow'
import styles from './styles.module.css'

type TrowData = {
  _id: number
  userName: string
  header: string
  replyNumber: number
  color: string
}

type TtopicTable = {
  data: TrowData[]
  handleRowClick: (_id: number) => void
}

const TopicTable: React.FC<TtopicTable> = ({ data = [], handleRowClick }) => {
  return (
    <TableContainer>
      <Table className={`${styles.table} ${styles.table__type_topic}`}>
        <TableBody>
          {data.map(({ _id, header, userName, replyNumber, color }, index) => {
            const handleClick = () => {
              handleRowClick(_id)
            }
            return (
              <TopicTableRow
                key={index}
                header={header}
                userName={userName}
                replyNumber={replyNumber}
                color={color}
                onClick={handleClick}
              />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TopicTable
