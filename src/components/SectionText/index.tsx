import React from 'react';
import { Container , Title} from './styles';

interface SectionTextProps {
  title: string;
  subTitle: string;
}

export const SectionText: React.FC<SectionTextProps> = ({title, subTitle}) => {
  return (
    <Container>
      <Title subTitle={subTitle}>{title}</Title>
    </Container>
  );  
}