import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';

interface User {
  name: string,
  lname: string,
  email: string,
  gender: string,
  loginInfo: {
    dateTime: string,
    ipv4: string,
  },
  id: string,
};

interface Users {
  rows: User[]
};

export default (props: Users) => 
  <TableBody>
    {props.rows.map(
      row =>
        <TableRow>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.lname}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.gender}</TableCell>
          <TableCell>{row.loginInfo.dateTime}</TableCell>
          <TableCell>{row.loginInfo.ipv4}</TableCell>
        </TableRow>
    )}
  </TableBody>
