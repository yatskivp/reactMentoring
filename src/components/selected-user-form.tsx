import React from 'react';
import Input from '@material-ui/core/TextField';
import SelectedUserFormContainer from '../containers/selected-user-form-container';
import withUserHoc from './with-user-hoc';
import {IUser} from '../store/users-list/types';
import styles from './selected-user-form.module.css';

function CustomInput ({children}: any){
  return (
    <Input value={children}/>
  );
};

export default function SelectedUserForm() {
  return (
    <SelectedUserFormContainer>
      {(selectedUser: IUser) => (
        <form className={styles.selectedUserForm}>
          {withUserHoc(CustomInput as React.ComponentType, selectedUser)}
        </form>
      )}
    </SelectedUserFormContainer>
  )
}
