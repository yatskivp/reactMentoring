import { createContext } from 'react';

export const themes = {
  light: 'light',
  dark: 'dark'
};

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeConsumer = ThemeContext.Consumer;