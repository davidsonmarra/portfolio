import styled from 'styled-components';

interface ContainerProps {
  readonly isTop: boolean;
}

export const Container = styled.header<ContainerProps>`
  z-index: 999;
  position: fixed;
  background: ${({ theme }) => theme.colors.headerBackground};
  transition: all .5s ease-in-out, box-shadow .8s ease-in-out;
  box-shadow: ${({ isTop }) => !isTop ? 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;' : ''};
  width: 100%;
  top: 0;
`;

export const Content = styled.div<ContainerProps>`
  transition: all 0.50s ease-in-out;
  padding: ${({ isTop }) => isTop ? '2rem 1rem' : '1.2rem 1rem'};
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  z-index: 999;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 16.5px;
  
`;

export const NameLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.25s ease-out;
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavBar = styled.nav`
  font-size: 16.5px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const NavItem = styled.li`
  & + li {
    margin-left: 1.5rem;
  }
`;

export const Section = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  transition: all 0.25s ease-out;
  :hover {
    filter: ${({ theme }) => theme.colors.filterText};
  }
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => `linear-gradient(140deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 60%)`};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const ThemeIconContainer = styled.div`
  border-radius: 0.5rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  :hover {
    cursor: pointer;
    filter: ${({ theme }) => theme.colors.filterIcon};
    background: ${({ theme }) => theme.colors.backgroundThemeIcon};
  }
`;