import styled from 'styled-components';

interface ContainerProps {
  readonly isSideBarOpen: boolean;
}

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  right: ${({ isSideBarOpen }) => isSideBarOpen ? '0' : '-120%' };
  transition: all 1050ms, background-color 350ms;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.sidebarBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.background};
  transition: all .3s;
  opacity: 1;
  &:hover li {
    filter: opacity(0.7);
  }
`;

export const SideBarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.5rem;
  font-size: 24px;
  & svg {
    margin-right: 1rem;
    transition: all 1s;
    :hover {
      filter: ${({ theme }) => theme.colors.filterIcon};
    }
  }
`;