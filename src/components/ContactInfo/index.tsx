import React from 'react';
import { contactData } from '../../utils/contactData';
import { ContactItem } from '../ContactItem';
import {
  Container,
} from './styles';
import { ScrollReveal } from '../ScrollReveal';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

export const ContactInfo: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <ScrollReveal
      origin="top"
      distance="3rem"
      style={{
        width: width > 770 ? "65%" : "100%",
        alignItems: width > 770 ? "flex-start" : "center"
      }}
    >
      <Container>
          {
            contactData.map((item, i) => 
              <ContactItem key={i} data={item}></ContactItem>
            )
          }
      </Container>
    </ScrollReveal>
  );
}