import React, { useState, useEffect, lazy, Suspense } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../components/Loader';
import { ThemeProvider, themes } from '../utils';
import ToggleThemeBtn from '../components/ToggleThemeBtn';

type IHandleFormVisibility = (isFormVisible: boolean) => void;

const useStyles= makeStyles({
  container: {
    'justify-content': 'center'
  }
});

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [theme, setTheme] = useState({
    theme: themes.dark,
    toggleTheme: () => {}
  });
  const handleFormVisibility: IHandleFormVisibility = (isFormVisible: boolean = false) => {setIsFormVisible(isFormVisible)};
  const classes = useStyles();
  const UsersListTable = lazy(() => import('./UsersListTable'));
  const SelectedUser = lazy(() => import('./SelectedUser'));

  useEffect(() => {
    const toggleTheme = () => {
      const newTheme = theme.theme === themes.dark ? themes.light : themes.dark;
  
      setTheme(prevTheme => ({ ...prevTheme,  theme: newTheme }));
    };

    setTheme(prevTheme => ({
      ...prevTheme,
      toggleTheme: toggleTheme
    }));
  }, [theme.theme]);

  return (
    <Grid className={classes.container} container>
      <Grid item>
        <ThemeProvider value={theme}>
          <ToggleThemeBtn />
          <Suspense fallback={<Loader />}>
            {isFormVisible ?
              (<SelectedUser />) :
              (<UsersListTable  handleFormVisibility={handleFormVisibility} />)
            }
          </Suspense>
        </ThemeProvider>
      </Grid>
    </Grid>
  )
}
