import React from 'react';
import { Header } from '../../components/Header';
import { SocialMediasHome } from '../../components/SocialMediasHome';
import Tilt from 'react-parallax-tilt';
import { ScrollReveal } from '../../components/ScrollReveal';
import { Container, Name, CartoonContainer, Cartoon } from './styles';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { ScrollIndicator } from '../../components/ScrollIndicator';

interface HomeProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ themeMode, changeTheme }) => {
  const { width } = useWindowDimensions();

  return (
    <Container id="home">
      <Header themeMode={themeMode} changeTheme={changeTheme} />
      <ScrollReveal
        origin="top"
        distance="10rem"
      >
        <Tilt glareBorderRadius="50%" glareEnable={true} glareMaxOpacity={0.4} glareColor="lightblue" glarePosition="all" perspective={2000}>
          <CartoonContainer themeMode={themeMode}>
            <Cartoon className="Tilt-inner" src="/assets/cartoon.png" />
          </CartoonContainer>
        </Tilt>
        <Name>Davidson Marra</Name>
        <SocialMediasHome />
        { width >= 600 && <ScrollIndicator />}
      </ScrollReveal>
    </Container>
  );
}