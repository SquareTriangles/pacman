import React from 'react'
import TableCell from '@mui/material/TableCell';
import Avatar from '@mui/material/Avatar';
import laurelImage from '../../../../assets/images/laurel.png';
import pacmanImage from '../../../../assets/images/pacman.png';
import coinImage from '../../../../assets/images/money.png';
import styles from './styles.module.css';

type TtableCellCustom = {
  size: 'medium' | 'small',
  align: 'center' | 'inherit' | 'justify' | 'left' | 'right',
  children: JSX.Element | JSX.Element[] | string | number
  className?: string
}

const TableCellCustom: React.FC<TtableCellCustom> = ({ size="medium", align="center", className = '', children}) => {
  return (
    <TableCell className={className} size={size} align={align}>
      {
        children
      }
    </TableCell>);
}

type TtableCellNumber = {
  orderNumber: number
}

const TableCellNumber: React.FC<TtableCellNumber> = ({ orderNumber }) => {
  return (<TableCellCustom className={`${styles.tableCell} ${styles.tableCell__type_number}`} size="small" align="left">
    <div>
      <img src={laurelImage} />
      <p className={styles.tableCell__text}>{orderNumber}</p>
    </div>    
  </TableCellCustom>)
}

type TtableCellName = {
  name: string,
  image: string,
}

const TableCellName: React.FC<TtableCellName> = ({ name, image }) => {
  return (<TableCellCustom className={`${styles.tableCell} ${styles.tableCell__type_name}`} size="medium" align="left">
    <div>
      <Avatar src={pacmanImage} />
      <p className={`${styles.tableCell__text}`}>{name}</p>
    </div>
  </TableCellCustom>)
}

type TtableCellScore = {
  score: number,
}

const TableCellScore: React.FC<TtableCellScore> = ({ score }) => {
  return (<TableCellCustom className={`${styles.tableCell} ${styles.tableCell__type_score}`} size="small" align="right">
    <div>
      <Avatar className={styles.icon} src={coinImage} />
      <div className={styles.container}>
        <p className={`${styles.tableCell__text}`}>{score}</p>
      </div>
    </div>
  </TableCellCustom>)
}


export {
  TableCellNumber,
  TableCellName,
  TableCellScore,
}
