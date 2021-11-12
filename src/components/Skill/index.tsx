import React, { useState } from 'react';
import { NavigateRightIcon } from '../Svgs'; 
import { 
  Container, 
  SymbolContainer, 
  Symbol, 
  Title, 
  MoreText 
} from './styles';

interface SkillProps {
  animationData: any;
  title: string;
}

export const Skill: React.FC<SkillProps> = ({
  animationData,
  title
}) => {
  // eslint-disable-next-line
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false 
  })
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Container>
      <SymbolContainer>
        <Symbol
          options={defaultOptions}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </SymbolContainer>
      <Title>{title}</Title>
      <MoreText>Saiba Mais<NavigateRightIcon /></MoreText>
    </Container>
  );
}