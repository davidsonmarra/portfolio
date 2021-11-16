import React from 'react';
import { Anchor } from '../../components/Anchor';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container } from './styles';

export const Projects: React.FC = () => {
  return (
    <Container>
      <Anchor id="projects" />
      <ScrollReveal
        origin="top"
        distance="3rem"
      >
        <SectionText
          title="Projetos"
          subTitle="o que eu fiz"
        />
      </ScrollReveal>
    </Container>
  );
}