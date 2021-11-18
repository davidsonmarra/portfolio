import React from 'react';
import {
  Container,
} from './styles';

interface TextareaProps {
  title: string;
  field: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  title,
  field
}) => {
  return (
    <Container>
      <div className="form__div">
        <textarea 
          id={field} 
          name={field}
          className="form__input" 
          placeholder=" " 
          required
        />
        <label htmlFor={field} className="form__label">{title}</label>
      </div>
    </Container>
  );
}