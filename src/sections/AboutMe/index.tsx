import React, { useEffect, useRef } from 'react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { SectionText } from '../../components/SectionText';
import Typed from 'typed.js';
import { Container, 
  Content, 
  Image, 
  TextContainer, 
  TitleContainer,
  Title, 
  TitleDynamic,
  DescriptionContainer,
  Divider,
  Description
} from './styles';

export const AboutMe: React.FC = () => {
  const uri = "/assets/me.png";
  const el = useRef<any>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Desenvolvedor Front-End", 
        "Desenvolvedor Mobile", 
        "Desenvolvedor Back-End", 
        "Desenvolvedor Full-Stack",
        "Técnico em eletrônica",
        "Estudante de TI"
      ], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <Container id="about">
        <ScrollReveal 
          origin="top"
          distance="10rem"
        >
          <SectionText 
            title="Sobre mim"
            subTitle="quem eu sou"
          />
        </ScrollReveal>
        <Content>
          <ScrollReveal 
            origin="left"
            distance="5rem"
          >
            <Image
              src={uri}
            />
          </ScrollReveal>
          <ScrollReveal 
            origin="right"
            distance="5rem"
          >
            <TextContainer>
              <TitleContainer>
                <Title>Eu sou &nbsp;</Title>
                <TitleDynamic ref={el}></TitleDynamic>
              </TitleContainer>
              <DescriptionContainer>
                <Divider />
                <Description>
                  Atualmente sou Programador em desenvolvimento Mobile com React Native na Compasso UOL e estou em busca de adquirir experiências e aumentar meus conhecimentos na área. <br/>
                  Estou cursando Engenharia da Computação na PUC Minas e fiz curso técnico integrado de eletrônica no COLTEC.<br/>
                  Meu foco atual é o React Native no ambiente mobile, no qual eu trabalho e o ReactJS no ambiente web.
                </Description>
              </DescriptionContainer>
            </TextContainer>
          </ScrollReveal>
        </Content>
      </Container>
  );
}