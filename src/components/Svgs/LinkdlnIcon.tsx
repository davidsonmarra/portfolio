import React from 'react';
import { useTheme } from 'styled-components';
import { SvgProps } from './TelegramIcon';

export const LinkdlnIcon: React.FC<SvgProps> = ({
  title
}) => {
  const theme = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="35" height="35"viewBox="0 0 48 48" fill="#000000">
      <title>{title}</title>
      <path fill={theme.colors.primary} d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z"></path>
      <rect width="9" height="26" x="4" y="17" fill={theme.colors.primary}></rect>
      <path fill={theme.colors.primary} d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z"></path>
    </svg>
  );
}