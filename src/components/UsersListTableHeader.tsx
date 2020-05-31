import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeConsumer, themes } from '../utils';

const DarkTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    }
  }),
)(TableCell);

const LightTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    }
  }),
)(TableCell);

const StyledTableCell = (props: any) => props.theme === themes.dark 
? <DarkTableCell {...props} />
: <LightTableCell {...props} />

interface IProps {
  columns: {id: string, label: string}[],
};

export default ({columns}: IProps) =>
  <TableHead>
    <TableRow>
        <ThemeConsumer>
          {({ theme }) => (
             columns.map(column => (
              <StyledTableCell theme={theme} key={column.id}>{column.label}</StyledTableCell>
            ))
          )}
        </ThemeConsumer>
    </TableRow>
  </TableHead>