import React, { useState } from 'react';
import { ScrollReveal } from '../ScrollReveal';
import { NavigateRightIcon } from '../Svgs'; 
import { 
  Container, 
  SymbolContainer, 
  Symbol, 
  Title, 
  MoreText 
} from './styles';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { ModalDataProps } from '../../sections/Skills';

interface SkillProps {
  animationData: any;
  title: string;
  delay: number;
  handleClickSkill: (data: any) => void;
  modalData: ModalDataProps;
  lastItem: boolean;
}

export const Skill: React.FC<SkillProps> = ({
  animationData,
  title,
  delay,
  handleClickSkill,
  modalData,
  lastItem
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
      distance="3rem"
      delay={delay}
    > 
      <Container 
        lastItem={lastItem} 
        onClick={() => handleClickSkill(modalData)}
      >
        <SymbolContainer>
          <Symbol
            width={width < 975 ? '10rem' : '100%'}
            height={width < 975 ? '100%' : '8rem'}
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