import React from 'react';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SelectedUserFormContainer from '../containers/selected-user-form-container';
import { IUser } from '../store/users-list/types';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    'flex-direction': 'column',
    width: '500px'
  }
});

export default function SelectedUserForm() {
  const classes = useStyles();

  return (
    <Paper>
      <SelectedUserFormContainer>
        {(selectedUser: IUser) => (
          <> 
            <Typography variant="h4" gutterBottom align="center">
              {new Set(Object.values(selectedUser)).size === 1 ? 'Add User' : 'Edit User'}
            </Typography>
            <form className={classes.form}>
              {Object.entries(selectedUser).map(([name, value]) => (
                <TextField
                  key={name}
                  label={name}
                  defaultValue={value}
                />
              ))}
            </form>
          </>
        )}
    </SelectedUserFormContainer>
    </Paper>
  )
}
