import React from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container, Content, Image } from './styles';

export const AboutMe: React.FC = () => {
  const uri = "/assets/me.png";

  return (
      <Container id="about">
        <ScrollReveal 
          origin="top"
          distance="10rem"
        >
          <SectionText 
            title="Sobre mim"
            subTitle="quem eu sou?"
          />
        </ScrollReveal>
        <Content>
          <ScrollReveal 
            origin="left"
            distance="5rem"
          >
            <Image
              src={uri}
            />
          </ScrollReveal>
          <ScrollReveal 
            origin="right"
            distance="5rem"
          >
            <SectionText 
              title="Sobre mim"
              subTitle="quem eu sou?"
            />
          </ScrollReveal>
        </Content>
      </Container>
  );
}