import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
  }),
)(TableCell);

interface IProps {
  columns: {id: string, label: string}[],
};

export default ({columns}: IProps) =>
  <TableHead>
    <TableRow>
      {columns.map(column => 
        <StyledTableCell key={column.id}>{column.label}</StyledTableCell>)}
    </TableRow>
  </TableHead>