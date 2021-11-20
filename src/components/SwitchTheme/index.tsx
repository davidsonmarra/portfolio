import React from 'react';
import { LightModeIcon, DarkModeIcon } from '../Svgs';
import { Container, SvgContainer } from './styles';

interface SwitchProps {
  onClick: () => void;
}

const SwitchTheme: React.FC<SwitchProps> = ({ onClick }) => {
  return (
    <Container >
      <input 
        id="check" 
        className="checkbox" 
        type="checkbox" 
        onClick={onClick}/>
      <label 
        className="label" 
        htmlFor="check" 
      >
        <SvgContainer>
          <DarkModeIcon className="left"/>
        </SvgContainer>
        <SvgContainer>
          <LightModeIcon />
        </SvgContainer>
        <div className="ball" />
      </label>
    </Container>
  );
}

export default SwitchTheme;