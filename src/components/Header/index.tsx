import React from 'react';
import { 
  Container, 
  Name, 
  NavBar, 
  NavList,
  NavItem
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Name>Davidson</Name>
      <NavBar>
        <NavList>
          <NavItem>
            Sobre mim
          </NavItem>
          <NavItem>
            Habilidades
          </NavItem>
          <NavItem>
            Projetos
          </NavItem>
          <NavItem>
            Contato
          </NavItem>
          <NavItem>
            Projetos
          </NavItem>
        </NavList>
      </NavBar>
    </Container>
  );
}