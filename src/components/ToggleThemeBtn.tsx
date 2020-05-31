import React from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeConsumer, themes } from '../utils';

export default function ToggleThemeBtn() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <Switch
          checked={theme === themes.dark}
          onChange={toggleTheme}
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      )}
    </ThemeConsumer>
  )
}
