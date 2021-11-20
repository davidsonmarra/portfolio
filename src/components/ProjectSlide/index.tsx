import React from 'react';
import { ProjectProps } from '../../sections/Projects';
import { NavigateRightIcon } from '../Svgs';
import { 
  Container, 
  BannerContainer,
  Banner, 
  Logo, 
  DescriptionContainer, 
  Title, 
  TextContainer, 
  Divider,
  Description,
  ButtonContainer,
  Button,
  ButtonText
} from './styles';

interface ProjectSlideProps {
  data: ProjectProps;
  themeMode: boolean;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ data, themeMode }) => {
  return (
    <Container>
      <BannerContainer>
        <Banner 
          src={data.banner} 
          alt="Banner do Projeto"
        />
      </BannerContainer>
      <DescriptionContainer>
      {
        data.logo ?
          <Logo 
            width="125rem" 
            src={data.logo}
            alt="Logo do Projeto"
          /> :
          <Title>{data.title}</Title>
      }   
      <TextContainer>
      <Divider />
      <div>
        {
          data.descripton.map((text, i) => 
            <Description key={i}>{text}</Description>
          )
        }
      </div>
      </TextContainer>
      <ButtonContainer 
        target="_blank"
        rel="noopener"
        href={data.link}
        themeMode={themeMode}
      >
        <Button>
          <ButtonText>Ver Projeto<NavigateRightIcon /></ButtonText>
        </Button>
      </ButtonContainer>
      </DescriptionContainer>
    </Container>
  );
}