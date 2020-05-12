import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import UsersListTableBodyContainer from '../containers/users-list-table-body-container';
import {IUser} from '../store/users-list/types'

const rowStyles = {
  hover: {
    cursor: 'pointer'
  },
  root: {
    '&:last-child:hover': {
      
    },
  }
};

const StyledTableRow = withStyles(rowStyles)(TableRow);

interface IProps {
  handleFormVisibility: (isFormVisible: boolean) => void,
  columns: {id: string, label: string}[],
}

type IHandleRowClick = (row: IUser, handler: (isFormVisible: boolean) => void) => void;

export default (props: IProps) => 
  <UsersListTableBodyContainer>
    {(rows: IUser[], handleRowClick: IHandleRowClick) => (
      <TableBody>
        {rows.map(
          row =>
            <StyledTableRow key={row.id} onClick={() => handleRowClick(row, props.handleFormVisibility)} hover>
              {props.columns.map(({id}) => (
                <TableCell key={id}>{ row[id] }</TableCell>
              ))}
            </StyledTableRow>
          )}
      </TableBody>
    )}
    
  </UsersListTableBodyContainer>
