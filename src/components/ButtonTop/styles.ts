import styled from 'styled-components';

interface ContainerProps {
  show: boolean;
}

export const Container = styled.a<ContainerProps>`
  width: 2.5rem;
  height: 2.5rem;
  z-index: 2;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: .25rem;
  transition: all .3s;
  transform: ${({ show }) => show ? 'translateY(0%)' : 'translateY(300%)'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.skillBackground};
  :hover {
    background-color: ${({ theme }) => theme.colors.btnTopBackground};
    & svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
  & svg {
    transition: all .3s;
  }
  @media(max-width: 450px) {
    display: none;
  }
`;