import React from 'react';
import { 
  GitHubIcon,
  TelegramIcon,
  LinkdlnIcon
} from '../Svgs';
import { Container, Icons, Link } from './styles';

export const SocialMediasHome: React.FC = () => {
  return (
    <Container>
      <Icons>
        <Link target="_blank" href="https://www.linkedin.com/in/davidson-marra">
          <LinkdlnIcon />
        </Link>
        <Link target="_blank" href="https://github.com/davidsonmarra">
          <GitHubIcon />
        </Link>
        <Link target="_blank" href="https://t.me/Davidsonmarra">
          <TelegramIcon />
        </Link>
      </Icons>
    </Container>
  );
}