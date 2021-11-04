import React from 'react';
import { Header } from '../../components/Header';
import Tilt from 'react-parallax-tilt';
import { Container, CartoonContainer, Cartoon } from './styles';
import { SocialMediasHome } from '../../components/SocialMediasHome';


interface HomeProps {
  themeMode: boolean;
  changeTheme: (state: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ themeMode, changeTheme }) => {
  return (
    <Container>
      <Header themeMode={themeMode} changeTheme={changeTheme} />
        <Tilt className="parallax-effect" perspective={4000}>
          <CartoonContainer themeMode={themeMode}>
            <Cartoon className="Tilt-inner" src="/assets/cartoon.png" />
          </CartoonContainer>
        </Tilt>
      <SocialMediasHome />
    </Container>
  );
}