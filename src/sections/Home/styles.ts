import styled from 'styled-components';

interface CartoonContainerProps {
  readonly themeMode: boolean;
}

export const Container = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
`;

export const CartoonContainer = styled.div<CartoonContainerProps>`
  transition: all 0.50s ease-in-out;
  background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.secondary} 0%, ${theme.colors.primary} 60%)`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 25rem;
  height: 25rem;
  overflow: hidden;
`;

export const Cartoon = styled.img`
  width: 20rem;
  -khtml-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;