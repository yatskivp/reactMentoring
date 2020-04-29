import React, {useState} from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UsersListTable from './users-list-table';
import SelectedUser from './selected-user';

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
  
  return (
    <Grid className={classes.container} container>
      <Grid item>
      {isFormVisible ?
        (<SelectedUser />) :
        (<UsersListTable  handleFormVisibility={handleFormVisibility}/>)
      }
      </Grid>
    </Grid>
  )
}
