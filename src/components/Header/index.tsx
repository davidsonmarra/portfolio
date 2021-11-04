import React, { useEffect, useState } from 'react';
import { DarkModeIcon } from '../Svgs/DarkModeIcon';
import { LightModeIcon } from '../Svgs/LightModeIcon';
import { SideBar } from '../SideBar';
import { SideBarMenu } from '../SideBarMenu';
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
import { handleTop } from '../../utils/functions';

interface HeaderProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ themeMode, changeTheme }) => {
  const { width } = useWindowDimensions();
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
      document.addEventListener("scroll", () => handleTop(setIsTop, 50));
      return () => {
      document.removeEventListener("scroll", () => handleTop(setIsTop, 50));
    };
  }, [])

  const handleOpenSideBar = (isOpen : boolean) => {
    setIsSideBarOpen(!isOpen);
  }

  return (
    <Container isTop={isTop}>
      <Content isTop={isTop}>
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
          <>
            <SideBar isSideBarOpen={isSideBarOpen} handleOpenSideBar={handleOpenSideBar} />
            <SideBarMenu 
              isSideBarOpen={isSideBarOpen} 
              handleOpenSideBar={handleOpenSideBar}
              themeMode={themeMode}
              changeTheme={changeTheme}
            />
          </>
        }
      </Content>
    </Container>
  );
}