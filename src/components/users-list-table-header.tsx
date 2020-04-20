import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';

const columnsLabel: string[] = ['First Name', 'Last Name', 'Email', 'Gender', 'Login Time', 'User IP'];

export default () =>
  <TableHead>
    <TableRow>
      {columnsLabel.map(columnLabel => 
        <TableCell key={columnLabel}>{columnLabel}</TableCell>)}
    </TableRow>
  </TableHead>