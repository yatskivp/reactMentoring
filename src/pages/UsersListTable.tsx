import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from '../components/users-list-table-header';
import TableBody from '../components/UsersListTableBody';
import Loader from '../components/Loader';
import Notification from '../components/Notifications';
import { columns } from '../utils';
import { IState } from '../store';

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
}

export default (props: IProps) => {
  const isLoading = useSelector(({ users }: IState) => users.isLoading);
  const error = useSelector(({ users }: IState) => users.error);

  return (
    <>
      { isLoading && <Loader /> }

      { error && <Notification status='error' message={error}/> }

      <TableContainer>
        <Table>
          <TableHeader columns={columns}/>
          <TableBody {...props} columns={columns}/>
        </Table>
      </TableContainer>
    </>
  );   
}