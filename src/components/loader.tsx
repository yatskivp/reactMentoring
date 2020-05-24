import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  loader: {
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: "50%",
    display: 'flex',
    alignItems: 'center',
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}> 
      <CircularProgress />
    </div>
  )
};