import React from 'react'
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

interface IProps {
  status: "success" | "info" | "warning" | "error" | undefined,
  message: string,
};

const useStyles = makeStyles({
  notification: {
    
  }
});

export default ({status, message}: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.notification}>
      <Alert severity={status}>{message}</Alert>
    </div>
  )
}
