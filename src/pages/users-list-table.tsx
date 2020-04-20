import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/users-list-table-body';

export default () =>
  <TableContainer>
    <Table>
      <TableHeader />
      <TableBody />
    </Table>
  </TableContainer>