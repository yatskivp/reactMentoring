import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import UsersListTableBodyContainer from '../containers/users-list-table-body-container';
import {IUser} from '../store/users-list/types'

export default () => 
  <UsersListTableBodyContainer>
    {(rows: IUser[]) => (
      <TableBody>
        {rows.map(
          row =>
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.lname}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.loginInfo.dateTime}</TableCell>
              <TableCell>{row.loginInfo.ipv4}</TableCell>
            </TableRow>
          )}
      </TableBody>
    )}
    
  </UsersListTableBodyContainer>
