import React, { useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const handleChanceMode = (state: boolean) => {
    setIsDarkTheme(!state);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header themeMode={isDarkTheme} changeTheme={handleChanceMode}/>
    </ThemeProvider>
  );
}

export default App;
