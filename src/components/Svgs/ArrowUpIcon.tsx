import React from 'react';
import { useTheme } from 'styled-components';
import { SvgProps } from './TelegramIcon';

export const ArrowUpIcon: React.FC<SvgProps> = ({
  title
}) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill={theme.colors.primary}>
      <title>{title}</title>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </svg>
  );
}