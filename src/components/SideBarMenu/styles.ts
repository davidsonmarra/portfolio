import styled from 'styled-components';

interface ContainerProps {
  readonly isSideBarOpen: boolean;
}

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  right: ${({ isSideBarOpen }) => isSideBarOpen ? '0' : '-100%' };
  transition: 850ms;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;

export const SideBarItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  font-size: 24px;
  & svg {
    margin-right: 1rem;
  }
`;