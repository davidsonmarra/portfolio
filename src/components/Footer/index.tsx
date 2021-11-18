import React from 'react';
import {
  Container,
  Copyright
} from './styles';

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright href="#" rel="author">
        Davidson Marra Rodrigues Vieira &nbsp;&copy;&nbsp; 2021
      </Copyright>
    </Container>
  );
}