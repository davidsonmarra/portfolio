import React from 'react';
import { Container } from './styles';

interface AnchorProps {
  id: string;
}

export const Anchor: React.FC<AnchorProps> = ({ id }) => {
  return <Container id={id} />;
}