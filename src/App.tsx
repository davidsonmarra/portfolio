import React, { useEffect, useState } from 'react';
import { Home } from './sections/Home';
import { AboutMe } from './sections/AboutMe';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';
import { Skills } from './sections/Skills';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const keyTheme = "@davidsonmarra:theme";

  const handleChangeMode = (state: boolean) => {
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
      <Home themeMode={isDarkTheme} changeTheme={handleChangeMode}/>
      <AboutMe themeMode={isDarkTheme} />
      <Skills themeMode={isDarkTheme} />
    </ThemeProvider>
  );
}

export default App;
