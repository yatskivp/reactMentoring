import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from './users-list-table-header';
import TableBody from './users-list-table-body';

interface List {
  users: []
}

export default (props: List) =>
  <TableContainer>
    <Table>
      <TableHeader />
      <TableBody rows={props.users}/>
    </Table>
  </TableContainer>