import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.headerBackground};
  transition: all 0.50s ease-in-out;
`;

export const Content = styled.div`
  padding: 1.5rem 1rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
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
    filter: brightness(0.8);
  }
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
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
    background: #22222222;
    filter: brightness(0.8);
  }
`;