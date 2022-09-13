import React from 'react'
import TableRow, { TableRowProps } from '@mui/material/TableRow'

const TableRowCustom: React.FC<TableRowProps> = ({ children, ...rest }) => {
  return <TableRow {...rest}>{children}</TableRow>
}

export default TableRowCustom
