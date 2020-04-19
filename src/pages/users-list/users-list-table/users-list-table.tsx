import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from './users-list-table-header';
import TableBody from './users-list-table-body';
import {UsersInt} from '../../../interfaces/users-interface';

export default (props: UsersInt) =>
  <TableContainer>
    <Table>
      <TableHeader />
      <TableBody rows={props.users}/>
    </Table>
  </TableContainer>