import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/users-list-table-body';
import Loader from '../components/loader';
import { columns } from '../utils';
import { IState } from '../store';

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
}

export default (props: IProps) => {
  const isLoading = useSelector(({ users }: IState) => users.isUsersLoading);

  return (
    <>
      { isLoading ? 
      <Loader /> : null }
      <TableContainer>
        <Table>
          <TableHeader columns={columns}/>
          <TableBody {...props} columns={columns}/>
        </Table>
      </TableContainer>
    </>
  );   
}