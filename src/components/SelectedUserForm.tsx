import React from 'react';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SelectedUserFormContainer from '../containers/SelectedUserFormContainer';
import { IUser } from '../store/users-list/types';
import { SaveBtn, CancelBtn } from './control-form-btns';

interface IProps {
  handleSaveBtnClick: (payload: Object) => void
};

const useStyles = makeStyles({
  selectedUserForm: {
    display: 'flex',
    'flex-direction': 'column',
    width: '500px'
  }
});

export default function SelectedUserForm(props: IProps) {
  const classes = useStyles();

  return (
    <SelectedUserFormContainer>
      {(selectedUser: IUser, handleSaveBtnClick, handleCancleBtnClick, handleChangeValue) => (
        <>
          <Paper> 
            <Typography variant="h4" gutterBottom align="center">
              {new Set(Object.values(selectedUser)).size === 1 ? 'Add User' : 'Edit User'}
            </Typography>
            <form className={classes.selectedUserForm}>
              {Object.entries(selectedUser).map(([name, value]) => (
                <TextField
                  key={name}
                  label={name}
                  name={name}
                  value={value}
                  onChange={handleChangeValue}
                />
              ))}
            </form>
          </Paper>
          <div>
            <SaveBtn 
              handleSaveBtnClick={handleSaveBtnClick}
            />
            <CancelBtn 
              handleCancleBtnClick={handleCancleBtnClick}
            />
          </div>
        </>
      )}
    </SelectedUserFormContainer>
  )
}
