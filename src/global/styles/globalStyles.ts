import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  isOpen: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => `${theme.colors.primary} ${theme.colors.background}`};
  }
  // front-size: 16px (Desktop)
  html {
    scroll-behavior: smooth;
    overflow-y: ${({ isOpen }) => 
      isOpen ? "hidden" : "auto"
    };
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.50s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
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
  .typed-cursor{
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: all .3s;
    z-index: 999;
    @media (min-width: 575px) {
      align-items: center;
      transition: all .9s;
    } 
  }

  .react-modal-content {
    width: 100%;
    max-height: 95%;
    max-width: 576px;
    background: ${({ theme }) => theme.colors.skillBackground};
    padding: 1rem 2rem 2rem;
    position: relative;
    border-radius: 1rem 1rem 0 0;
    transition: all .5s;
    transform: translateY(200%);
    @media (min-width: 575px) {
      border-radius: 1rem;
    } 
  }

  .ReactModal__Content--after-open{
    transition: all .5s;
    transform: translateY(0%);
    @media (min-width: 575px) {
      transition: all .9s;
    } 
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter .2s;
    &:hover {
      filter: brightness(.8);
    }
  }

  .ReactModal__Content--before-close{
    transition: all .5s;
    transform: translateY(200%);
  }
`;

