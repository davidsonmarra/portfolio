import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Sections } from './sections';
import { Footer } from './components/Footer';
import { GlobalStyle } from './global/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './global/styles/theme';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isSkillsModalIsOpen, setIsSkillsModalIsOpen] = useState<boolean>(false);
  const keyTheme = "@davidsonmarra:theme";

  Modal.setAppElement('#root');

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
  }, []);

  const handleOpenSkillsModal = () => {
    setIsSkillsModalIsOpen(true);
  }

  const handleCloseSkillsModal = () => {
    setIsSkillsModalIsOpen(false);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle 
        isOpen={isSkillsModalIsOpen}
      />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkTheme ? "dark" : "light"}
        style={{marginTop: "5rem"}}
      />
      <Header 
        themeMode={isDarkTheme} 
        changeTheme={handleChangeMode} 
      />
      <Sections 
        isSkillsModalIsOpen={isSkillsModalIsOpen}
        themeMode={isDarkTheme} 
        changeTheme={handleChangeMode} 
        closeModal={handleCloseSkillsModal}
        openModal={handleOpenSkillsModal}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
