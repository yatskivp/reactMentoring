import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  handleSaveBtnClick: () => void,
};

const useStyles = makeStyles({
  saveBtn: {
    margin: '5px 5px 5px 0',
  }
});

export default function Save(props: IProps) {
  const classes = useStyles();

  return (
    <Button
      className={classes.saveBtn}
      variant="contained"
      color='primary'
      onClick={props.handleSaveBtnClick}
    >Save
    </Button>
  )
}
