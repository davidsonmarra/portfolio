import React, { useState } from 'react';
import { Anchor } from '../../components/Anchor';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container, SkillsContainer } from './styles';
import { Skill } from '../../components/Skill';
import { data } from '../../utils/skillsCards';

interface SkillsProps {
  themeMode: boolean;
}

interface DataSkillsProps {
  title: string;
  imageDark: any,
  imageLight: any,
  id: number
}

export const Skills: React.FC<SkillsProps> = ({
  themeMode
}) => {
  // eslint-disable-next-line
  const [dataSkills, setDataSkills] = useState<DataSkillsProps[]>(data);
  

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
          {
            dataSkills.map((item, index) => 
            <Skill 
              key={index}
              animationData={
              themeMode ? item.imageDark : 
              item.imageLight} 
              title={item.title}
              delay={(index * 500) + 500}
            />)
          }
          {/* <Skill animationData={
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
          /> */}
        </SkillsContainer>
      </ScrollReveal>
    </Container>
  );
}