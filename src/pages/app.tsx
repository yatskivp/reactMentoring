import React, { useState, lazy, Suspense } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../components/Loader';

type IHandleFormVisibility = (isFormVisible: boolean) => void;

const useStyles= makeStyles({
  container: {
    'justify-content': 'center'
  }
});

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleFormVisibility: IHandleFormVisibility = (isFormVisible: boolean = false) => {setIsFormVisible(isFormVisible)};
  const classes = useStyles();
  const UsersListTable = lazy(() => import('./UsersListTable'));
  const SelectedUser = lazy(() => import('./SelectedUser'));
  
  return (
    <Grid className={classes.container} container>
      <Grid item>
      <Suspense fallback={<Loader />}>
        {isFormVisible ?
          (<SelectedUser />) :
          (<UsersListTable  handleFormVisibility={handleFormVisibility}/>)
        }
      </Suspense>
      </Grid>
    </Grid>
  )
}
