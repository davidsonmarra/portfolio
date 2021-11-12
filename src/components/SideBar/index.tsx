import React from 'react';
import { CloseIcon, MenuIcon } from '../Svgs';
import { Container } from './styles';

interface SideBarProps {
  isSideBarOpen: boolean;
  handleOpenSideBar: (state: boolean) => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isSideBarOpen, handleOpenSideBar }) => {


  return (
    <Container onClick={() => handleOpenSideBar(isSideBarOpen)}>
      {isSideBarOpen ? <CloseIcon /> : <MenuIcon />}
    </Container>
  );
}