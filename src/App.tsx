import React, { useState } from 'react';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';
import { Home } from './sections/Home';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChanceMode = (state: boolean) => {
    setIsDarkTheme(!state);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Home themeMode={isDarkTheme} changeTheme={handleChanceMode}/>
    </ThemeProvider>
  );
}

export default App;
