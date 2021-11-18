import React from 'react';
import {
  Container,
} from './styles';

interface TextareaProps {
  field: string;
  name: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  field,
  name
}) => {
  return (
    <Container>
      <div className="form__div">
        <textarea id={field} className="form__input" placeholder=" " />
        <label htmlFor={field} className="form__label">{name}</label>
      </div>
    </Container>
  );
}