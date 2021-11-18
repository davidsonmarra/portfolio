import React from 'react';
import {
  Container,
  TextContainer,
  Title,
  Info
} from './styles';

interface ContactDataProps {
  id: number;
  title: string;
  info: string;
  Icon: React.FC
}

interface ContactItemProps {
  data: ContactDataProps;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  data
}) => {
  const Icon = data.Icon;
  return (
    <Container>
      <Icon />
      <TextContainer>
        <Title>{data.title}</Title>
        <Info>{data.info}</Info>
      </TextContainer>
    </Container>
  );
}