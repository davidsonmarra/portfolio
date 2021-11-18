import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import { SendIcon } from '../Svgs';
import { Textarea } from '../Textarea';
import {
  Container,
  InputContainer,
  ButtonContainer,
  Button
} from './styles';
import { ScrollReveal } from '../ScrollReveal';
import { useForm } from '@formspree/react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { toast } from 'react-toastify' ;  

export const ContactForm: React.FC = () => {
  const { width } = useWindowDimensions();
  const [success, setSuccess] = useState(false);
  const [state, handleSubmit, reset] = useForm("xdoyqpjq");

  useEffect(() => {
    if(state.succeeded) {
      setSuccess(true);
    } 
  }, [state.succeeded]);
   
  useEffect(() => {
    if(success) {
      toast.success("E-mail enviado com sucesso!");
      setSuccess(false);
      const form: any = document.getElementById("contact-form")!;
      form.reset();
      reset();
    }
    // eslint-disable-next-line
  }, [success]);

  return (
    <ScrollReveal
      origin="top"
      distance="3rem"
      style={{ 
        width: width > 770 ? "125%" : "100%"
      }}
    >
      <Container onSubmit={handleSubmit} id="contact-form" >
        <InputContainer>
          <Input title="Nome" field="name"/>
          <Input title="E-mail" field="email"/>
        </InputContainer>
        <Textarea title="Escreva sua mensagem aqui" field="message"/>
        <ButtonContainer>
          <Button type="submit"disabled={state.submitting} >
            <span>Enviar Mensagem</span><SendIcon />
          </Button>
        </ButtonContainer>
      </Container>
    </ScrollReveal>
  );
}