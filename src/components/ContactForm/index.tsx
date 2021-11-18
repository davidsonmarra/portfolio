import React from 'react';
import { Input } from '../Input';
import { SendIcon } from '../Svgs';
import { Textarea } from '../Textarea';
import {
  Container,
  InputContainer,
  ButtonContainer,
  Button
} from './styles';
  

export const ContactForm: React.FC = () => {
  return (
    <Container >
      <InputContainer>
        <Input name="Nome" field="name"/>
        <Input name="E-mail" field="email"/>
      </InputContainer>
      <Textarea name="Escreva sua mensagem aqui" field="message"/>
      <ButtonContainer>
        <Button type="submit" >
          <span>Enviar Mensagem</span><SendIcon />
        </Button>
      </ButtonContainer>
    </Container>
  );
}