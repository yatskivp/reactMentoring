import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/users-list-table-body';
import Loader from '../components/loader';
import Notification from '../components/notifications';
import { columns } from '../utils';
import { IState } from '../store';

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
}

export default (props: IProps) => {
  const isLoading = useSelector(({ users }: IState) => users.isUsersLoading);
  const isError = useSelector(({ users }: IState) => users.isUsersFail);

  return (
    <>
      { isLoading ? 
      <Loader /> : null }

      { isError ? 
      <Notification status='error' message="Something went wrong. Please, try again later."/> : null }

      <TableContainer>
        <Table>
          <TableHeader columns={columns}/>
          <TableBody {...props} columns={columns}/>
        </Table>
      </TableContainer>
    </>
  );   
}