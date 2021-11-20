import React from 'react';
import { 
  AboutIcon,
  ContactMeIcon,
  HardSkillsIcon,
  ProjectsIcon
} from '../Svgs';
import SwitchTheme from '../SwitchTheme';
import { Container, SideBarList, Link, SideBarItem } from './styles';


interface SideBarMenuProps {
  isSideBarOpen: boolean;
  handleOpenSideBar: (state: boolean) => void;
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const SideBarMenu: React.FC<SideBarMenuProps> = ({ 
  isSideBarOpen, 
  handleOpenSideBar, 
  themeMode, 
  changeTheme 
}) => {

  return (
    <Container isSideBarOpen={isSideBarOpen}>
      <SideBarList>
        <li>
          <Link href="#about" onClick={() => handleOpenSideBar(isSideBarOpen)}>
            <SideBarItem>
              <AboutIcon />
              Sobre mim
            </SideBarItem>
          </Link>
        </li>
        <li>
          <Link href="#skills" onClick={() => handleOpenSideBar(isSideBarOpen)}>
            <SideBarItem>
              <HardSkillsIcon />
              Habilidades
            </SideBarItem>
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={() => handleOpenSideBar(isSideBarOpen)}>
            <SideBarItem>
              <ProjectsIcon />
              Projetos
            </SideBarItem>
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => handleOpenSideBar(isSideBarOpen)}>
            <SideBarItem>
              <ContactMeIcon />
              Contato
            </SideBarItem>
          </Link>
        </li>
        <li>
          <SideBarItem >
            <SwitchTheme onClick={() => changeTheme(themeMode)}/>
          </SideBarItem>
        </li>
      </SideBarList>
    </Container>
  );
}