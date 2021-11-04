import styled from 'styled-components';

interface ContainerProps {
  readonly isSideBarOpen: boolean;
}

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  right: ${({ isSideBarOpen }) => isSideBarOpen ? '0' : '-100%' };
  transition: all 850ms, background-color 350ms;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.headerText};
  transition: all .3s;
  opacity: 1;
  &:hover li {
    filter: opacity(0.7);
  }
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