import React from 'react';
import {
  Container
} from './styles';

interface InputProps {
  field: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  field
}) => {
  return (
    <Container>
      <div className="form__div">
        <input type="text" id={field} className="form__input" placeholder=" " />
        <label htmlFor={field} className="form__label">{name}</label>
      </div>
    </Container>
  );
}