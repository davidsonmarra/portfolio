import React, { useState } from 'react';
import { Anchor } from '../../components/Anchor';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container, SkillsContainer } from './styles';
import { Skill } from '../../components/Skill';
import { data } from '../../utils/skillsCards';


interface SkillsProps {
  themeMode: boolean;
  openModal: () => void;
  setModalData: (data: ModalDataProps) => void;
}

export interface ModalDataProps {
  imageLight: any,
  imageDark: any,
  title: string;
  text: string[];
}

interface DataSkillsProps {
  title: string;
  imageDark: any;
  imageLight: any;
  id: number;
  modal: ModalDataProps;
}

export const Skills: React.FC<SkillsProps> = ({
  themeMode,
  openModal,
  setModalData
}) => {
  // eslint-disable-next-line
  const [dataSkills, setDataSkills] = useState<DataSkillsProps[]>(data);

  const handleClickSkill = (data: any) => {
    setModalData(data);
    openModal();
  }

  return (
    <Container >
      <Anchor id="skills" />
      <ScrollReveal 
        origin="top"
        distance="3rem"
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
              modalData={item.modal}
              delay={(index * 500) + 500}
              handleClickSkill={handleClickSkill}
              lastItem={(dataSkills.length - 1) === index}
            />)
          }
        </SkillsContainer>
      </ScrollReveal>
    </Container>
  );
}