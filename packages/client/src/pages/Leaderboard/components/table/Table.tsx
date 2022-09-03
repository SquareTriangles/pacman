import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';


import styles from './styles.module.css';
import { TableRowCustom } from '../TableRow/TableRow';
import { TableCellName, TableCellNumber, TableCellScore } from '../TableCell/TableCell';

const templateData = [
  { name: 'packman', image: 'image_path', score: 1223, },
  { name: 'batman', image: 'image_path', score: 1224, },
  { name: 'iron man', image: 'image_path', score: 1225, },
  { name: 'spider man', image: 'image_path', score: 1226, },
];


const ScoreTable: React.FC = () => {
  return (
    <TableContainer className={styles.tableContainer}>
      <Table className={styles.table} aria-label="simple table">
  
        <TableBody>
          {
            templateData.map((item, index) => {
              return (
                <TableRowCustom key={index}> 
                  <TableCellNumber orderNumber={index+1} />
                  <TableCellName name={item.name} image={item.image}/>                  
                  <TableCellScore score={item.score} />
                </TableRowCustom>
              );
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ScoreTable;
