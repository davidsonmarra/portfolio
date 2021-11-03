import React from 'react';
import { AboutIcon } from '../Svgs/AboutIcon';
import { ContactMeIcon } from '../Svgs/ContactMeIcon';
import { HardSkillsIcon } from '../Svgs/HardSkillsIcon';
import { ProjectsIcon } from '../Svgs/ProjectsIcon';
import SwitchTheme from '../SwitchTheme';
import { Container, SideBarList, SideBarItem } from './styles';


interface SideBarMenuProps {
  isSideBarOpen: boolean;
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const SideBarMenu: React.FC<SideBarMenuProps> = ({ isSideBarOpen, themeMode, changeTheme }) => {

  return (
    <Container isSideBarOpen={isSideBarOpen}>
      <SideBarList>
        <SideBarItem>
          <AboutIcon />
          Sobre mim
        </SideBarItem>
        <SideBarItem>
          <HardSkillsIcon />
          Habilidades
        </SideBarItem>
        <SideBarItem>
          <ProjectsIcon />
          Projetos
        </SideBarItem>
        <SideBarItem>
          <ContactMeIcon />
          Contato
        </SideBarItem>
        <SideBarItem >
          <SwitchTheme onClick={() => changeTheme(themeMode)}/>
        </SideBarItem>
      </SideBarList>
    </Container>
  );
}