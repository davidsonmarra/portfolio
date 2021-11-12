import React from 'react';
import { Anchor } from '../../components/Anchor';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container, SkillsContainer } from './styles';
import { Skill } from '../../components/Skill';
import animationBackEndLight from './animationBackEndLight.json';
import animationBackEndDark from './animationBackEndDark.json';

// import animationFrontEndLight from './animationFrontEndLight.json';
import animationFrontEndDark from './animationFrontEndDark.json';

import animationMobileLight from './animationMobileLight.json';
import animationMobileDark from './animationMobileDark.json';

interface SkillsProps {
  themeMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({
  themeMode
}) => {
  

  return (
    <Container >
      <Anchor id="skills" />
      <ScrollReveal 
        origin="top"
        distance="10rem"
      >
        <SectionText
          title="Habilidades"
          subTitle="o que eu sei"
        />
        <SkillsContainer>
          <Skill animationData={
            themeMode ? animationBackEndDark : 
            animationBackEndLight} 
            title="Back-End"
          />
          <Skill 
            animationData={animationFrontEndDark} 
            title="Front-End"
          />
          <Skill animationData={
            themeMode ? animationMobileDark : 
            animationMobileLight} 
            title="Mobile"
          />
        </SkillsContainer>
      </ScrollReveal>
    </Container>
  );
}