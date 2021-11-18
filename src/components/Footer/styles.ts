import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% { background-position: -120% }
  100% { background-position: 0% }
`;


export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  transition: all .5s ease-in-out;
`;

export const Copyright = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: ${({ theme }) => `linear-gradient(
    -75deg,
    transparent 0,
    transparent 5%,
    ${theme.colors.secondary} 5%,
    ${theme.colors.secondary} 10%,
    transparent 10%,
    transparent 100%
  )`};
  background-size: 200% 100%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transition: 1.2s;
  text-align: center;
  animation: ${shine} 4s linear infinite;
  font-size:1rem;
`;