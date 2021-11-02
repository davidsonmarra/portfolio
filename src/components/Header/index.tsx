import React from 'react';
import { DarkModeIcon } from '../Svgs/DarkModeIcon';
import { LightModeIcon } from '../Svgs/LightModeIcon';
import { SideBar } from '../SideBar';
import { 
  Container, 
  Content,
  Name, 
  NameLink,
  NavBar, 
  NavList,
  NavItem,
  Section,
  ThemeIconContainer
} from './styles';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

interface HeaderProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ themeMode, changeTheme }) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <Content>
        <Name><NameLink href="#">Davidson</NameLink></Name>
        {
          width > 920 ?
          <NavBar>
            <NavList>
              <NavItem>
                <Section href="#about">Sobre mim</Section>
              </NavItem>
              <NavItem>
                <Section href="#skills">Habilidades</Section>
              </NavItem>
              <NavItem>
                <Section href="#projects">Projetos</Section>
              </NavItem>
              <NavItem>
                <Section href="#contact">Contato</Section>
              </NavItem>
              <NavItem>
                <ThemeIconContainer onClick={() => changeTheme(themeMode)}>
                  {themeMode ? <LightModeIcon /> : <DarkModeIcon />}
                </ThemeIconContainer>
              </NavItem>
            </NavList>
          </NavBar> :
          <SideBar />
        }
      </Content>
    </Container>
  );
}