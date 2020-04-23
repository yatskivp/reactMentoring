import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

const columnsLabel: string[] = ['First Name', 'Last Name', 'Email', 'Gender', 'Login Time', 'User IP'];

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
  }),
)(TableCell);

export default () =>
  <TableHead>
    <TableRow>
      {columnsLabel.map(columnLabel => 
        <StyledTableCell key={columnLabel}>{columnLabel}</StyledTableCell>)}
    </TableRow>
  </TableHead>