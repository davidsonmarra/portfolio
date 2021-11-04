import React from 'react';
import { GitHubIcon } from '../Svgs/GitHubIcon';
import { GmailIcon } from '../Svgs/GmailIcon';
import { LinkdlnIcon } from '../Svgs/LinkdlnIcon';
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
        <Link target="_blank" href="mailto:davidsonmarra@gmail.com">
          <GmailIcon />
        </Link>
      </Icons>
    </Container>
  );
}