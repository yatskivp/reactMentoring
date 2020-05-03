import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/users-list-table-body';
import { columns } from '../utils';

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
}

export default (props: IProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHeader columns={columns}/>
        <TableBody {...props} columns={columns}/>
      </Table>
    </TableContainer>
  );   
}