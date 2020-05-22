import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import TableHeader from '../components/UsersListTableHeader';
import TableBody from '../components/UsersListTableBody';
import Loader from '../components/Loader';
import Notification from '../components/Notifications';
import AddUserBtn from '../components/AddUserBtn';
import { columns } from '../utils';
import { IStore } from '../store';

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
}

const useStyles = makeStyles({
  tableContainer: {
    display: '-webkit-box',
  }
});

export default (props: IProps) => {
  const classes = useStyles();
  const handleAddUserBtnClick: () => void = () => {
    props.handleFormVisibility(true);
  }

  const isLoading = useSelector(({ users }: IStore) => users.isLoading);
  const error = useSelector(({ users }: IStore) => users.error);

  return (
    <>
      { isLoading && <Loader /> }

      { error && <Notification status='error' message={error}/> }
      <div className={classes.tableContainer}>
        <AddUserBtn handleAddUserBtnClick={handleAddUserBtnClick}/>
        <TableContainer>
          <Table>
            <TableHeader columns={columns}/>
            <TableBody {...props} columns={columns}/>
          </Table>
        </TableContainer>
      </div>
    </>
  );   
}