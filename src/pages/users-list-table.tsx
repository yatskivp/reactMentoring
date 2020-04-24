import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/users-list-table-body';

interface IProps {
  handleFormVisibility?: (isFormVisible: boolean) => void
}

export default (props: IProps) =>
  <TableContainer>
    <Table>
      <TableHeader />
      <TableBody {...props}/>
    </Table>
  </TableContainer>