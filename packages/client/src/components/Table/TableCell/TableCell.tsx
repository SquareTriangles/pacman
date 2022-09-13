import React from 'react'
import TableCell, { TableCellProps } from '@mui/material/TableCell'

const TableCellCustom: React.FC<TableCellProps> = ({ children, ...rest }) => {
  return <TableCell {...rest}>{children}</TableCell>
}

export default TableCellCustom
