import React, { useState } from 'react';
import { ScrollReveal } from '../ScrollReveal';
import { NavigateRightIcon } from '../Svgs'; 
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
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
  delay: number;
}

export const Skill: React.FC<SkillProps> = ({
  animationData,
  title,
  delay
}) => {
  // eslint-disable-next-line
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false 
  });
  const { width } = useWindowDimensions();
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ScrollReveal 
      origin="top"
      distance="10rem"
      delay={delay}
    > 
      <Container>
        <SymbolContainer>
          <Symbol
            width={width < 800 ? '10rem' : '100%'}
            height={width < 800 ? '100%' : '8rem'}
            options={defaultOptions}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </SymbolContainer>
        <Title>{title}</Title>
        <MoreText>Saiba Mais<NavigateRightIcon /></MoreText>
      </Container>
    </ScrollReveal>
  );
}