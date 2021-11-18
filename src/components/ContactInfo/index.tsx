import React from 'react';
import { contactData } from '../../utils/contactData';
import { ContactItem } from '../ContactItem';
import {
  Container,
} from './styles';

export const ContactInfo: React.FC = () => {
  return (
    <Container>
      {
        contactData.map((item, i) => 
          <ContactItem key={i} data={item}></ContactItem>
        )
      }
    </Container>
  );
}