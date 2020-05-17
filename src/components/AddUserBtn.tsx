import React from 'react'
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  handleAddUserBtnClick: () => void,
}

const useStyles = makeStyles({
  addBtn: {
    marginRight: '10px',
  }
});

export default function AddUserBtn(props: IProps) {
  const classes = useStyles();
  const onIconBtnClick: () => void = () => { props.handleAddUserBtnClick() };

  return (
    <IconButton 
      className={classes.addBtn} 
      title="Add New User"
      onClick={onIconBtnClick}
    >
      <AddCircleOutlineIcon />
    </IconButton>
  )
}
