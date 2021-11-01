import React, { useState } from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
