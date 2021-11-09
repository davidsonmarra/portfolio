import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // front-size: 16px (Desktop)
  html {
    scroll-behavior: smooth;
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }
  }
  ::-webkit-scrollbar {
    width: 0.65rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 60%)`};
    /* border-radius: 1rem; */
    transition: all 0.50s ease-in-out;
  }
  
  // REM = 1rem = 16px => sempre usaremos rem para responsividade
  body {
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    transition: all 0.50s ease-in-out;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disbbled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

