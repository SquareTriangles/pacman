import React from 'react'
import TableRow  from '@mui/material/TableRow';
import styles from './styles.module.css';


type TtableRowCustom = {
  children: JSX.Element | JSX.Element[]
}

const TableRowCustom: React.FC<TtableRowCustom> = ({ children }) => {
  return (
    <TableRow>
      {children}
    </TableRow>
  );
}

export {TableRowCustom};