import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  svg { 
    transition: all .3s;
  }
  :hover .sidebar {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.primary};
  }
  :hover .close-sidebar {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.headerBackground};
  }
`;