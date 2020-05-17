import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SelectedUserForm from '../components/SelectedUserForm';
import { editUser } from '../store/users-list/actions';

export default (props: any) => {
  const dispatch = useDispatch();

  const handleSaveBtnClick: (payload: Object) => void = useCallback((payload) => {
    dispatch(editUser(payload));
  }, [dispatch]);

  return (
    <SelectedUserForm {...props} handleSaveBtnClick={handleSaveBtnClick}/>
  );
}
  