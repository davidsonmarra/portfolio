import React from 'react';
import { 
  Container, 
  Title, 
  Local, 
  Date, 
  DateText,
  Ball, 
  Line 
} from './styles';
import { DataProps } from '../TimeLine';
import { DateIcon } from '../Svgs';

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
      <Title item={item}>{item.title}</Title>
      <Local>{item.local}</Local>
      <Date><DateIcon /><DateText>{item.date}</DateText></Date>
      <Ball />
      <Line index={item.id} max={max} />
    </Container>
  );
}

export default ElementTimeLine;