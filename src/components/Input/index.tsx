import React from 'react';
import {
  Container
} from './styles';

interface InputProps {
  title: string;
  field: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  field
}) => {
  return (
    <Container>
      <div className="form__div">
        <input 
          type={field === "email" ? field : "text"} 
          name={field}
          id={field} 
          className="form__input" 
          placeholder=" " 
          required
        />
        <label htmlFor={field} className="form__label">{title}</label>
      </div>
    </Container>
  );
}