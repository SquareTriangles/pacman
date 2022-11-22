import type React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import { TableRowCustom } from '../../../../components/Table'
import {
  TableCellName,
  TableCellNumber,
  TableCellScore,
} from '../TableCell/TableCell'
//@ts-ignore
import styles from './styles.module.css'

const templateData = [
  { name: 'packman', image: 'image_path', score: 12203 },
  { name: 'batman', image: 'image_path', score: 12 },
  { name: 'iron man', image: 'image_path', score: 1 },
  { name: 'spider man', image: 'image_path', score: 123 },
]

type TTableRow = {
  name: string,
  image: string,
  score: number,
}

type TScoreTable = {
  data: TTableRow[]
}

const ScoreTable: React.FC<TScoreTable> = ({
  data = [],
}) => {
  return (
    <TableContainer className={styles.tableContainer}>
      <Table className={styles.table}>
        <TableBody>
          {data.map((item, index) => {
            if (index > 5) {
              return <></>
            }
            return (
              <TableRowCustom key={index}>
                <TableCellNumber orderNumber={index + 1} />
                <TableCellName name={item.name} image={item.image} />
                <TableCellScore score={item.score} />
              </TableRowCustom>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ScoreTable
