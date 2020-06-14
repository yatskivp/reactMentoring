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
  isLoading?: boolean, 
  error?: string
}

const useStyles = makeStyles({
  tableContainer: {
    display: '-webkit-box',
  }
});

export const UsersListTable = (props: IProps) => {
  const classes = useStyles();
  const { handleFormVisibility, isLoading, error } = props;
  const handleAddUserBtnClick: () => void = () => {
    handleFormVisibility(true);
  }

  return(
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
};

export default (props: IProps) => {
  const isLoading = useSelector(({ users }: IStore) => users.isLoading);
  const error = useSelector(({ users }: IStore) => users.error);

  return (
    <UsersListTable
      isLoading={isLoading}
      error={error}
      { ...props }
    />
  );   
}