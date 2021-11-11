import React from 'react';
import { ResumeIcon } from '../Svgs/ResumeIcon';
import { Container, Content, Download } from './styles';

interface ResumeButtonProps {
  themeMode: boolean;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ 
  themeMode 
}) => {
  return (
    <Download 
      href="https://drive.google.com/file/d/1zm_1GKUK8hlZn6aKQS6RMHxFt0LuWeyf/view?usp=sharing"
      target="_blank"
    >
      <Container themeMode={themeMode}>
        <Content>
          <ResumeIcon />Currículo
        </Content>
      </Container>
    </Download>
  );
}