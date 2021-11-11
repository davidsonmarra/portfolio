import styled from 'styled-components';

interface ContainerProps {
  themeMode: boolean;
}

export const Download = styled.a`
  text-decoration: none;
  @media (max-width: 675px) {
    margin: 1.5rem auto 0;
  }
`;

export const Container = styled.button<ContainerProps>`
  margin-top: 1rem;
  padding: 1.5rem 1rem;
  font-size: 1.25rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  transition: all .5s ease-in-out;
  border: none;
  border-radius: .25rem;
  &:hover {
    filter: ${({ theme, themeMode }) => themeMode ? theme.colors.filterIcon : theme.colors.filterText};
  }
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease-in-out;
  & svg {
    transition: all .5s ease-in-out;
    margin-right: .5rem;
  }
  color: ${({ theme }) => theme.colors.background};
`;