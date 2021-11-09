import React, { useEffect, useState } from 'react';
import { Home } from './sections/Home';
import { AboutMe } from './sections/AboutMe';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const keyTheme = "@davidsonmarra:theme";

  const handleChanceMode = (state: boolean) => {
    localStorage.setItem(keyTheme, String(!state));
    setIsDarkTheme(!state);
  }

  useEffect(() => {
    const curentTheme = localStorage.getItem(keyTheme);
    curentTheme ? 
      curentTheme === "false" && setIsDarkTheme(false)
    : localStorage.setItem(keyTheme, String(isDarkTheme));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home themeMode={isDarkTheme} changeTheme={handleChanceMode}/>
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
