import React from 'react';
import { 
  Container, 
  Title, 
  Local, 
  Date, 
  Ball, 
  Line 
} from './styles';
import { DataProps } from '../TimeLine';

interface ElementTimeLineProps {
  item: DataProps;
  max: number;
}

const ElementTimeLine: React.FC<ElementTimeLineProps> = ({
  item,
  max
}) => {
  return (
    <Container item={item}>
      <Title>{item.title}</Title>
      <Local>{item.local}</Local>
      <Date>{item.date}</Date>
      <Ball />
      <Line index={item.id} max={max} />
    </Container>
  );
}

export default ElementTimeLine;