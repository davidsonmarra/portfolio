import styled, { keyframes } from 'styled-components';

interface CartoonContainerProps {
  readonly themeMode: boolean;
}

const shine = keyframes`
  0% { background-position: -120% }
  100% { background-position: 0% }
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const Name = styled.h1`
  margin-top: 4rem;
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
  animation: ${shine} 2s linear infinite;
  font-size: 2rem;
  @media (max-width: 472px) {
    width: 100%;
    white-space: normal;
  }
`;

export const CartoonContainer = styled.div<CartoonContainerProps>`
  transition: all 0.50s ease-in-out;
  background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 60%)`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 23rem;
  height: 23rem;
  overflow: hidden;
  @media (max-width: 675px) {
    width: 18rem;
    height: 18rem;
  }
  @media (max-height: 700px) {
    width: 20rem;
    height: 20rem;
  }
  @media (max-height: 620px) {
    width: 18rem;
    height: 18rem;
  }
`;

export const Cartoon = styled.img`
  width: 18rem;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  @media (max-width: 675px) {
    width: 15rem;
  }
  @media (max-height: 700px) {
    width: 17rem;
  }
  @media (max-height: 620px) {
    width: 15rem;
  }
`;