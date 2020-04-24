import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import UsersListTableBodyContainer from '../containers/users-list-table-body-container';
import withUser from './with-user-hoc';
import {IUser} from '../store/users-list/types'

const rowStyles = {
  hover: {
    cursor: 'pointer',
  },
};

const StyledTableRow = withStyles(rowStyles)(TableRow);

interface IProps {
  handleFormVisibility?: (isFormVisible: boolean) => void
}
// TODO
//type IHandleRowClick = (row: IUser, handler: (isFormVisible: boolean) => void) => void;

export default (props: IProps) => 
  <UsersListTableBodyContainer>
    {(rows: IUser[], handleRowClick: any) => (
      <TableBody>
        {rows.map(
          row =>
            <StyledTableRow key={row.id} onClick={handleRowClick.bind(null, row, props.handleFormVisibility)} hover>
              {withUser(TableCell, row)}
            </StyledTableRow>
          )}
      </TableBody>
    )}
    
  </UsersListTableBodyContainer>
