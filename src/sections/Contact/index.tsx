import React from 'react';
import { Anchor } from '../../components/Anchor';
import { ContactForm } from '../../components/ContactForm';
import { ContactInfo } from '../../components/ContactInfo';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import { Container, Content } from './styles';

export const Contact: React.FC = () => {
  return (
    <Container>
      <Anchor id="contact" />
      <ScrollReveal
        origin="top"
        distance="3rem"
      >
        <SectionText
          title="Contato"
          subTitle="entre em contato"
        />
      </ScrollReveal>
      <Content>
        <ContactInfo />
        <ContactForm />
      </Content>
    </Container>
  );
}