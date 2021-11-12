import React from 'react';
import { LightModeIcon, DarkModeIcon } from '../Svgs';
import { Container, SvgContainer } from './styles';

interface SwitchProps {
  onClick: () => void;
}

const SwitchTheme: React.FC<SwitchProps> = ({ onClick }) => {
  return (
    <Container >
      <input className="checkbox" type="checkbox" id="chk" onClick={onClick}/>
      <label className="label" htmlFor="chk" >
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